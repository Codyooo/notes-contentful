/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-09 10:23:01
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-19 10:20:59
 */
import Layout from "../components/MyLayout";
import PostList from "../components/PostList/PostList";
import Paginator from "../components/Pagination";
import Head from "next/head";
import { useRouter } from "next/router";
import { postsGetAsync, tagsGetAsync } from "../service/index";
import css from "./index.less";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import {
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
  NextPageContext,
} from "next";

const calculateRange = (length) => Array.from({ length }, (v, k) => k + 1);

export type IndexProps = {
  currentPage: number;
  total: number;
  limit: number;
  posts: any;
};

const Index = (props: IndexProps) => {
  // useEffect(() => {}, []);
  const { currentPage = 1, total, limit } = props;

  const range = calculateRange(Math.ceil(total / limit));
  const router = useRouter();
  const [page, setPage] = useState<number>(currentPage);

  useEffect(() => {
    router.push({ pathname: "/", query: { page } });
  }, [page]);
  return (
    <Layout>
      <Head>
        <title>Contentful Posts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PostList data={props.posts} />
      <div className={css.tag}></div>
      <div className={css.pagination}>
        <Paginator
          range={range}
          skip={page}
          handlePaginationChange={(page) => setPage(page)}
        />
      </div>

      <Link href="/movie">
        <Button color="secondary">movie</Button>
      </Link>
    </Layout>
  );
};

Index.getInitialProps = async ({ query }: NextPageContext) => {
  const currentPage = parseInt(query.page as string) || 1;

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
