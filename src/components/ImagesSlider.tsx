import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/ImagesSlider.module.scss";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

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
        <SwiperSlide>
          <Image
            src="/images/sneakers.jpg"
            alt="cart icon"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/sneakers1.jpg"
            alt="cart icon"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/sneakers2.jpg"
            alt="cart icon"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/sneakers3.jpg"
            alt="cart icon"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/sneakers4.jpg"
            alt="cart icon"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/sneakers5.jpg"
            alt="cart icon"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/sneakers6.jpg"
            alt="cart icon"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default ImagesSlider;
