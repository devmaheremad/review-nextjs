import { GetStaticProps } from "next";
import Head from "next/head";
import { PostTypes } from "../../@types/post.types";
import { PostsProps } from "../../@types/postsProps.types";
import Link from "../../src/Link";

const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      <Head>
        <title>Posts page</title>
        <meta name="description" content="Posts page, all Posts here" />
      </Head>
      <h1>Posts page, all Posts will listed here</h1>
      <ul>
        {posts.map((post) => {
          const { id, title } = post;
          return (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                {id}- Title for this post is: {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostTypes[] = await response.json();

  return {
    props: {
      posts: data,
    },
  };
};

export default Posts;
