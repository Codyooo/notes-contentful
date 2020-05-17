/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-09 10:55:12
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-15 20:07:38
 */

import ReactMarkDown from "react-markdown";
import Comments from "../../components/Conments/Conments";
import CodeBlock from "../../components/CodeBlock";
import Chip from "@material-ui/core/Chip";
import { useRouter } from "next/router";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Link from "next/link";
import { useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import ReactPlayer from "react-player";

import { animateScroll as scroll } from "react-scroll";
import css from "./id.less";

import {
  commentsGetAsync,
  commentAddAsync,
  postGetByIdAsync,
} from "../../service/index";

export type IPostProps = {
  post: any;
  comments: any;
  id: any;
};

export default function Post(props: IPostProps) {
  const { post, comments, id } = props;
  const router = useRouter();
  const [newComments, setComments] = useState<any>(() => comments);
  const [loading, setLoading] = useState(false);

  const getComments = async () => {
    setLoading(true);
    const data = await commentsGetAsync(id);
    setComments(data);
    setLoading(false);
  };
  console.log("pp", props);

  return (
    <div className={css.post}>
      {post.cover && (
        <div
          className={css.cover}
          style={{ backgroundImage: `url("${post.cover}")` }}
        >
          <Link href={"/"}>
            <div className={css.header}>
              <ArrowBackIcon />
              Back
            </div>
          </Link>
        </div>
      )}

      <div className={css.content}>
        <div className={css.tags}>
          {post.tags &&
            post.tags.map(({ tag, id }) => (
              <Chip
                key={id}
                style={{ marginRight: 10 }}
                label={tag}
                variant="outlined"
                color="primary"
                onClick={() => {
                  router.push(`/tag/${id}`);
                }}
              />
            ))}
        </div>
        <h1>{post.title}</h1>

        <ReactMarkDown
          source={post.content}
          className="markdown-content"
          escapeHtml={false}
          renderers={{
            code: CodeBlock,
            image: ({ alt, src }) => {
              if (alt === "video") {
                return (
                  <ReactPlayer
                    width="100%"
                    height="auto"
                    url={src}
                    playing
                    controls={true}
                  />
                );
              }
              return <img src={src} />;
            },
          }}
        />
      </div>

      <div>
        <Comments
          loading={loading}
          comments={newComments}
          onCreate={async (data) => {
            setLoading(true);
            await commentAddAsync(data.comment, id);
            await getComments();
            setLoading(false);
          }}
        />
      </div>
      <Fab
        color="secondary"
        aria-label="add"
        className={css.fab}
        onClick={() => scroll.scrollToTop()}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </div>
  );
}

Post.getInitialProps = async function (context) {
  const { id } = context.query;

  try {
    const post = await postGetByIdAsync(id);
    const comments = await commentsGetAsync(id);
    return {
      post,
      comments,
      id,
    };
  } catch (error) {
    return { error };
  }
};
