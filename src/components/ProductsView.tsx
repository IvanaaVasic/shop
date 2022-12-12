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
    productPrice: "12.550,00",
    id: 1,
  },
  {
    imgSrc: "/images/products/product1.jpg",
    brandName: "New Balance",
    productName: "New Balance 650",
    productPrice: "8.500,00",
    id: 2,
  },
  {
    imgSrc: "/images/products/product2.jpg",
    brandName: "Nike",
    productName: "Nike Air Force",
    productPrice: "17.420,00",
    id: 3,
  },
  {
    imgSrc: "/images/products/product3.jpg",
    brandName: "K Swiss",
    productName: "Ultra Shot 3",
    productPrice: "15.000,00",
    id: 4,
  },
  {
    imgSrc: "/images/products/product4.jpg",
    brandName: "Skechers",
    productName: "Dighton Bricelyn",
    productPrice: "5.090,00",
    id: 5,
  },
  {
    imgSrc: "/images/products/product5.jpg",
    brandName: "Converse",
    productName: "Chuck Taylor All Star",
    productPrice: "15.490,00",
    id: 6,
  },
  {
    imgSrc: "/images/products/product6.jpg",
    brandName: "Puma",
    productName: "Contempt Demi",
    productPrice: "7.890,00",
    id: 7,
  },
  {
    imgSrc: "/images/products/product7.jpg",
    brandName: "Adidas",
    productName: "Ultraboost",
    productPrice: "23.760,00",
    id: 8,
  },
];

const ProductsView = () => {
  const [cart, setCart] = useState<Product[]>([]);
  console.log(cart);
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
        {productsInfo.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Link href={"/product/id"}>
                <ProductCard
                  image={product.imgSrc}
                  brand={product.brandName}
                  name={product.productName}
                  price={product.productPrice}
                  setCart={setCart}
                  cart={cart}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductsView;