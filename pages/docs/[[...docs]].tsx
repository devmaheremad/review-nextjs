import { log } from "console";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "../../src/Link";

const Docs = () => {
  const router = useRouter();
  const { docs = [] } = router.query;

  const handleRouter = (): void => {
    router.push("/");
  };

  if (docs.length === 2) {
    return (
      <>
        <Head>
          <title>Docs page</title>
          <meta name="description" content="Docs page, all Docs here" />
        </Head>
        <h1>
          This is {docs[0]} feature, {docs[1]} concept
        </h1>
        <Link href={"/docs"}>Go to main docs page</Link>
      </>
    );
  } else if (docs.length === 1) {
    return (
      <>
        <Head>
          <title>Docs page</title>
          <meta name="description" content="Docs page, all Docs here" />
        </Head>
        <h1>This is {docs[0]} feature.</h1>
        <Link href={"/docs"}>Go to main docs page</Link>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Docs page</title>
        <meta name="description" content="Docs page, all Docs here" />
      </Head>
      <h1>Docs page, all Docs will listed here</h1>
      <button onClick={handleRouter}>Go home by force</button>
    </>
  );
};

export default Docs;
