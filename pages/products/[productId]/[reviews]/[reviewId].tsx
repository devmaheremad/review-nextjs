import Head from "next/head";
import { useRouter } from "next/router";

const ReviewsId = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <>
      <Head>
        <title>
          Review {reviewId} for product {productId} page
        </title>
        <meta
          name="description"
          content={`Review ${reviewId} for product ${productId} page`}
        />
      </Head>
      <h1>
        This is review {reviewId} about producr {productId}{" "}
      </h1>
      <h4>
        Review is: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ratione, repudiandae? Veritatis odit ad reprehenderit repellendus.
      </h4>
      <h4>From Maher</h4>
      <h4>Today</h4>
    </>
  );
};

export default ReviewsId;
