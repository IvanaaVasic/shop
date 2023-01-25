import React from "react";
import client from "../../utils/sanityClient";
import styles from "../../styles/Product.module.scss";
import Layout from "../../components/Layout";
import ProductImagesSwiper from "../../components/ProductImagesSwiper";
import ProductDetails from "../../components/ProductDetails";

export interface IProps {
  slug: string;
  product: IProduct;
}
export interface IImages {
  productImages?: [];
}
export interface IProduct {
  brand?: string;
  description?: string;
  image?: string;
  name?: string;
  price: number;
  rating?: number;
  _id?: string;
  blockProductImages?: IImages;
}

const Product = ({ slug, product }: IProps) => {
  return (
    <div className={styles.container}>
      <ProductImagesSwiper data={product} />
      <ProductDetails productInfo={product} />
    </div>
  );
};

Product.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps({ params }: any) {
  const product = await client.fetch(
    `*[_type == "productSneakers" && slug.current == "${params.slug}"][0]`
  );
  return {
    props: { slug: params.slug, product },
  };
}
export default Product;
