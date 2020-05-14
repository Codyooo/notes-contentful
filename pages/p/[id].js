/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-09 10:55:12
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-14 20:15:57
 */

import Layout from "../../components/MyLayout";
import ReactMarkDown from "react-markdown";
import Comments from "../../components/Conments/Conments";
import CodeBlock from "../../components/CodeBlock";
import Chip from "@material-ui/core/Chip";
import { useRouter } from "next/router";
import "./id.less";

import {
  commentsGetAsync,
  commentAddAsync,
  postGetByIdAsync,
} from "../../service/index";

export default function Post(props) {
  const { post, comments, id } = props;
  const router = useRouter();
  const [newComments, setComments] = React.useState(() => comments);
  const [loading, setLoading] = React.useState(false);

  const getComments = async () => {
    setLoading(true);
    const data = await commentsGetAsync(id);
    setComments(data);
    setLoading(false);
  };
  return (
    <Layout>
      <h1>{post.title}</h1>
      <div>
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
      <ReactMarkDown
        source={post.content}
        className="markdown-content"
        escapeHtml={false}
        renderers={{ code: CodeBlock }}
      />
      {/* {res.fields.story && documentToReactComponents(res.fields.story, options)} */}
      <div>
        <Comments
          loading={loading}
          comments={newComments}
          onCreate={async (data) => {
            setLoading(true);
            await commentAddAsync(data.comment, id);
            await getComments(id);
            setLoading(false);
          }}
        />
      </div>
    </Layout>
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
