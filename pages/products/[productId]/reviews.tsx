import Head from "next/head";
import { useRouter } from "next/router";

const Reviews = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <>
      <Head>
        <title>All reviews for product {productId}</title>
        <meta
          name="description"
          content={`All reviews for product ${productId}`}
        />
      </Head>
      <h1>All reviews for product {productId}</h1>
      <h4>Review 1</h4>
      <h4>Review 2</h4>
      <h4>Review 3</h4>
    </>
  );
};

export default Reviews;
