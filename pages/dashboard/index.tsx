import Head from "next/head";
import useSWR from "swr";
import { DashboardTypes } from "../../@types/dashboard.types";

const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json());

const Dashboard = () => {
  const { data, isLoading, error } = useSWR<DashboardTypes>(
    "http://localhost:4000/dashboard",
    fetcher
  );

  if (isLoading) {
    return <h1>Loading...!</h1>;
  }

  if (error) {
    return <h1>An error has occurred!</h1>;
  }

  return (
    <>
      <Head>
        <title>Dashboard page</title>
        <meta name="description" content="Dashboard page, all Dashboard here" />
      </Head>
      <h1>Dashboard page, all dashboard details will listed here</h1>
      <h2>Posts: {data?.posts}</h2>
      <h2>Likes: {data?.likes}</h2>
      <h2>Followers: {data?.followers}</h2>
      <h2>Following: {data?.following}</h2>
    </>
  );
};

export default Dashboard;
