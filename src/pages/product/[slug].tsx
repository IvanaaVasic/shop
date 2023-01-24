import React, { useEffect, useState } from "react";
import client from "../../utils/sanityClient";
import styles from "../../styles/Product.module.scss";
import Layout from "../../components/Layout";
import Image from "next/image";
import { urlFromThumbnail } from "../../utils/image";
import { Swiper, SwiperSlide } from "swiper/react";
import priceFormatting from "../../utils/priceFormatting";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import StarRating from "../../components/StarRating";

export interface IProps {
  slug: string;
}

const Product = ({ slug }: IProps) => {
  const [productInfo, setProduct] = useState<any>();
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const rate = productInfo?.rating;
  const [rating, setRating] = useState<number>(3);

  const handleChange = (value: number) => {
    setRating(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const product = await client.fetch(
        `*[_type == "productSneakers" && slug.current == "${slug}"][0]`
      );
      setProduct(product);
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    setRating(productInfo?.rating);
  }, [productInfo]);

  const productImages = productInfo?.blockProductImages?.productImages;
  const formatedPrice = priceFormatting(productInfo?.price);

  return (
    <div className={styles.container}>
      <div className={styles.imagesWrapper}>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[FreeMode, Navigation, Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className={`productCardSwiper ${styles.imagesSwiper}`}
        >
          {productImages?.map(({ image, _key }: any) => (
            <SwiperSlide key={_key}>
              <div
                className={`${styles.mainSlider} swiper-slide gallery-swiper`}
              >
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
          {productImages?.map(({ image, _key }: any) => (
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
      <div className={styles.productInfoWrapper}>
        <h1 className={styles.name}>{productInfo?.name}</h1>
        <div className={styles.brand}>{productInfo?.brand}</div>
        <p className={styles.description}>{productInfo?.description}</p>
        <p className={styles.price}>{`${formatedPrice} RSD`}</p>
        <StarRating
          count={5}
          size={40}
          value={rating}
          activeColor={"#00423f"}
          inactiveColor={"#ddd"}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
Product.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps({ params }: any) {
  return {
    props: { slug: params.slug },
  };
}
export default Product;
