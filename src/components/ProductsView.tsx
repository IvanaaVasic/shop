import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import ProductCard from "./ProductCard";
import { Product } from "./ProductCard";
import Link from "next/link";
import styles from "../styles/ProductCard.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/productAction";

export const productsInfo = [
  {
    imgSrc: "/images/products/product.jpg",
    brandName: "Nike",
    productName: "Air Max 253",
    productPrice: "12550",
    id: 1,
  },
  {
    imgSrc: "/images/products/product1.jpg",
    brandName: "New Balance",
    productName: "New Balance 650",
    productPrice: "8500",
    id: 2,
  },
  {
    imgSrc: "/images/products/product2.jpg",
    brandName: "Nike",
    productName: "Nike Air Force",
    productPrice: "17420",
    id: 3,
  },
  {
    imgSrc: "/images/products/product3.jpg",
    brandName: "K Swiss",
    productName: "Ultra Shot 3",
    productPrice: "15000",
    id: 4,
  },
  {
    imgSrc: "/images/products/product4.jpg",
    brandName: "Skechers",
    productName: "Dighton Bricelyn",
    productPrice: "5090",
    id: 5,
  },
  {
    imgSrc: "/images/products/product5.jpg",
    brandName: "Converse",
    productName: "Chuck Taylor All Star",
    productPrice: "15490",
    id: 6,
  },
  {
    imgSrc: "/images/products/product6.jpg",
    brandName: "Puma",
    productName: "Contempt Demi",
    productPrice: "7890",
    id: 7,
  },
  {
    imgSrc: "/images/products/product7.jpg",
    brandName: "Adidas",
    productName: "Ultraboost",
    productPrice: "23760",
    id: 8,
  },
];
export interface IProduct {
  imgSrc: string;
  brandName: string;
  productName: string;
  productPrice: string;
  id: number;
}

const ProductsView = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const dispatch = useDispatch();
  dispatch(addProduct(cart));

  return (
    <>
      <Swiper
        slidesPerView={3.75}
        breakpoints={{
          1658: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          960: {
            slidesPerView: 2.5,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2.2,
          },
          600: {
            slidesPerView: 1.75,
          },
          425: {
            slidesPerView: 1.3,
          },
          280: {
            slidesPerView: 1.1,
          },
        }}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className={styles.productCard__swiper}
      >
        {productsInfo.map(
          (
            { id, imgSrc, brandName, productName, productPrice }: IProduct,
            idx: number
          ) => {
            return (
              <SwiperSlide key={id}>
                <Link key={idx} href={"/product/id"}>
                  <ProductCard
                    image={imgSrc}
                    brand={brandName}
                    name={productName}
                    price={productPrice}
                    setCart={setCart}
                    cart={cart}
                  />
                </Link>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </>
  );
};

export default ProductsView;
