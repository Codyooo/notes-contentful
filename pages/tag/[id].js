/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-12 18:38:54
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-14 17:44:08
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

TagPage.getInitialProps = async (ctx) => {
  //@TODO: get Tags

  const { id } = ctx.query;
  return {
    id,
    tags: [],
  };
};
