import Head from "next/head";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <>
      <Head>
        <title>Product {productId} page</title>
        <meta
          name="description"
          content="Product {productId} page, all Product {productId} here"
        />
      </Head>
      <h1>Product {productId} page</h1>
      <h4>Product {productId} title</h4>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id totam
        placeat ipsam tempora! Impedit nam ratione temporibus quae laboriosam.
      </h4>
      <h4>Price: 500$</h4>
    </>
  );
};

export default Product;
