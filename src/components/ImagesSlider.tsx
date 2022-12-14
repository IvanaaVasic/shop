import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/ImagesSlider.module.scss";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

export interface imagesInterface {
  img: string;
  id: number;
}
const images: imagesInterface[] = [
  { img: "/images/sneakers.jpg", id: 1 },
  { img: "/images/sneakers1.jpg", id: 2 },
  { img: "/images/sneakers2.jpg", id: 3 },
  { img: "/images/sneakers3.jpg", id: 4 },
  { img: "/images/sneakers4.jpg", id: 5 },
  { img: "/images/sneakers5.jpg", id: 6 },
  { img: "/images/sneakers6.jpg", id: 7 },
];
const ImagesSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className={styles.imgSwiper}
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image.id}>
              <Image
                src={image.img}
                alt="cart icon"
                layout="fill"
                objectFit="cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default ImagesSlider;
