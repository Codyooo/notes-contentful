/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-09 16:03:29
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-14 18:36:05
 */
import Link from "next/link";
import ReactMarkDown from "react-markdown";
import css from "./PostItem.less";
import Paper from "@material-ui/core/Paper";
import moment from "moment";

export const PostItem = (props) => {
  const { title, date, timeToRead, id, preview = "", cover = "" } = props;

  return (
    <Paper
      elevation={2}
      className={css["post-item__wrapper"]}
      style={{
        padding: "12px 20px",
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={css.header}>
        <Link href="/p/[id]" as={`/p/${id}`}>
          <h2 className={css.title}>{title}</h2>
        </Link>
        <time className={css.date}>{moment(date).format(`YYYY.MM.DD`)}</time>
      </div>

      <div className={css.content}>
        {cover && (
          <div className={css.cover}>
            <img className={css.cover} src={cover} alt="cover" />
          </div>
        )}
        <div className={css.preview}>
          <ReactMarkDown
            source={preview}
            escapeHtml={false}

            // renderers={{ code: CodeBlock }}
          />
        </div>
      </div>
    </Paper>
  );
};
