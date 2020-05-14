/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-09 10:23:01
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-14 20:26:04
 */
import Layout from "../components/MyLayout";
import PostList from "../components/PostList/PostList";
import Paginator from "../components/Pagination";
import { useRouter } from "next/router";
import { postsGetAsync, tagsGetAsync } from "../service/index";
import css from "./index.less";
import { useEffect, useState } from "react";

const calculateRange = (length) => Array.from({ length }, (v, k) => k + 1);

const Index = (props) => {
  console.log("p", props);
  const { currentPage = 1, total, limit } = props;

  const range = calculateRange(Math.ceil(total / limit));
  const router = useRouter();
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    router.push({ pathname: "/", query: { page } });
  }, [page]);
  return (
    <Layout>
      <PostList data={props.posts} />
      <div className={css.tag}></div>
      <div className={css.pagination}>
        <Paginator
          range={range}
          skip={page}
          handlePaginationChange={(page) => setPage(page)}
        />
      </div>
    </Layout>
  );
};

Index.getInitialProps = async ({ query }) => {
  const currentPage = parseInt(query.page) || 1;

  const { posts, total, skip, limit } = await postsGetAsync(currentPage, 4);

  const { tags } = await tagsGetAsync();

  return {
    posts,
    total,
    skip,
    limit,
    currentPage,
    tags,
  };
};

export default Index;
