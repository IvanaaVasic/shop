import React, { useState } from "react";
import styles from "../styles/Product.module.scss";
import Image from "next/image";
import { urlFromThumbnail } from "../utils/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

export interface IImages {
  productImages?: [];
}
export interface IImage {
  image: string;
  _key: string;
}

export interface IProduct {
  blockProductImages?: IImages;
}

export interface IProps {
  data: IProduct;
}

const ProductImagesSwiper = ({ data }: IProps) => {
  const productImages = data?.blockProductImages?.productImages;
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className={styles.imagesWrapper}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className={`productCardSwiper ${styles.imagesSwiper}`}
      >
        {productImages?.map(({ image, _key }: IImage) => (
          <SwiperSlide key={_key}>
            <div className={`${styles.mainSlider} swiper-slide gallery-swiper`}>
              <Image
                src={urlFromThumbnail(image)}
                alt="hero image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`${styles.mySwiper} gallery-swiper small-swiper`}
      >
        {productImages?.map(({ image, _key }: IImage) => (
          <SwiperSlide key={_key}>
            <Image
              src={urlFromThumbnail(image)}
              alt="hero image"
              layout="fill"
              objectFit="cover"
              className={styles.smallImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImagesSwiper;
