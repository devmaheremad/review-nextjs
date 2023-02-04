import { GetServerSideProps } from "next";
import Head from "next/head";
import { NewInfo } from "../../@types/newInfo.types";
import { NewsProps } from "../../@types/newsProps.types";
import { New } from "../../src/components";

const News = ({ news }: NewsProps) => {
  if (!news) {
    return <h1>Loadnig...</h1>;
  }

  return (
    <>
      <Head>
        <title>News page</title>
        <meta name="description" content="News page, all News here" />
      </Head>
      <h1>News page, all News will listed here</h1>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/news");
  const data: NewInfo[] = await response.json();

  if (!data[0]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news: data,
    },
  };
};

export default News;
