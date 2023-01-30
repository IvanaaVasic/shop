import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import ProductCard from "./ProductCard";
import Link from "next/link";
import styles from "../styles/ProductCard.module.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/productAction";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface ISlug {
  current: string;
}
export interface IProduct {
  image: string;
  brand: string;
  name: string;
  price: number;
  _id: string;
  slug: ISlug;
}
export interface IProductCart {
  image: string;
  brand: string;
  name: string;
  price: number;
  quantity: number;
  isEmpty: boolean;
}

export interface IProps {
  products: IProduct[];
}

const ProductsView = ({ products }: IProps) => {
  const [cart, setCart] = useLocalStorage("cart", []);
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
            slidesPerView: 1.2,
          },
        }}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className={`${styles.productCard__swiper} productCardSwiper`}
      >
        {products.map(
          ({ _id, image, brand, name, price, slug }: IProduct, idx: number) => {
            return (
              <SwiperSlide key={_id}>
                <Link key={idx} href={`/product/${slug.current}`}>
                  <ProductCard
                    image={image}
                    brand={brand}
                    name={name}
                    price={price}
                    setCart={setCart}
                    cart={cart}
                    id={_id}
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
