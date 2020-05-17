import { NextPageContext } from "next";

/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-12 18:38:54
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-15 15:58:19
 */
const TagPage = (props) => {
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
