/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-09 10:23:01
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-15 14:43:32
 */
import { PostItem } from "./PostItem";
import { get } from "lodash";

const PostList = (props) => {
  return (
    <ul style={{ margin: 0, padding: 0, marginTop: 20 }}>
      {props.data &&
        props.data.map(({ id, title, preview, cover, date }) => {
          return (
            <PostItem
              key={id}
              id={id}
              title={title}
              preview={preview}
              date={date}
              cover={get(cover, ["fields", "file", "url"], "")}
            />
          );
        })}
    </ul>
  );
};

export default PostList;
