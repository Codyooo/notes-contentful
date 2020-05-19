/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-12 18:38:54
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-18 18:08:27
 */
import { NextPageContext } from "next";
export type ITagProps = {
  id: string;
};
const TagPage = (props: ITagProps) => {
  const { id } = props;
  return (
    <div>
      <div>{id}</div>
      <div>Tag页面</div>
    </div>
  );
};

export default TagPage;

TagPage.getInitialProps = async (ctx: NextPageContext) => {
  //@TODO: get Tags

  const { id } = ctx.query;
  return {
    id,
    tags: [],
  };
};
