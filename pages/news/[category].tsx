import { GetServerSideProps } from "next";
import Head from "next/head";
import { NewInfo } from "../../@types/newInfo.types";
import { NewsProps } from "../../@types/newsProps.types";
import { New } from "../../src/components";

const NewsCategory = ({ news, category }: NewsProps) => {
  if (!news) {
    return <h1>Loadnig...</h1>;
  }

  return (
    <>
      <Head>
        <title>News page</title>
        <meta name="description" content="News page, all News here" />
      </Head>
      <h1>News page, all News about {category} will listed here</h1>
      <ul>
        {news.map((newDetails) => {
          const { id, title, description, category } = newDetails;
          return (
            <li key={id} style={{ margin: "15px 0" }}>
              <New
                id={id}
                title={title}
                description={description}
                category={category}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NewsCategory;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params, req, res } = ctx;
  res.setHeader("Set-Cookie", ["theme=dark", "username=maher96"]);
  const response = await fetch(
    `http://localhost:4000/news?category=${params?.category}`
  );
  const data: NewInfo[] = await response.json();

  console.log(req.headers.cookie);

  if (!data[0]) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      news: data,
      category: params?.category,
    },
  };
};
