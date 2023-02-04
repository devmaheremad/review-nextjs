import { GetStaticPaths, GetStaticProps } from "next";
import { PostTypes } from "../../@types/post.types";
import { PostProps } from "../../@types/postProps.types";

const Post = ({ post }: PostProps) => {
  if (!post) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <span>{post?.id}</span> - <span>{post?.userId}</span> -{" "}
      <span>{post?.title}</span> - <span>{post?.body}</span>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostTypes[] = await response.json();
  const paths = data.slice(0, 3).map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data: PostTypes = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
    revalidate: 20,
  };
};

export default Post;
