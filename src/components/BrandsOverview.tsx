import React from "react";
import styles from "../styles/Brand.module.scss";
import stylesHeadings from "../styles/Headings.module.scss";

import Image from "next/image";
import Heading from "./Heading";

export interface IBrand {
  imgSrc: string;
  id: number;
}

export const brandsData = [
  {
    imgSrc: "/images/brands/adidas.png",
    id: 1,
  },
  {
    imgSrc: "/images/brands/converse.png",
    id: 2,
  },
  {
    imgSrc: "/images/brands/k-swiss.png",
    id: 3,
  },
  {
    imgSrc: "/images/brands/new-balance.png",
    id: 4,
  },
  {
    imgSrc: "/images/brands/nike.png",
    id: 5,
  },
  {
    imgSrc: "/images/brands/puma.png",
    id: 6,
  },
  {
    imgSrc: "/images/brands/reebok.png",
    id: 7,
  },
  {
    imgSrc: "/images/brands/skechers.png",
    id: 8,
  },
];

export const brandsHeadingInfo = {
  heading: "Lorem ipsum dolor sit amet",
  text: "~ BRAND LIST BLOCK ~",
  classContainer: stylesHeadings.sectionHeadingContainer,
  classWrapper: stylesHeadings.sectionHeadingWrapper,
  classHeading: stylesHeadings.sectionHeading,
  classText: stylesHeadings.sectionText,
};

const BrandsOverview = () => {
  return (
    <>
      <Heading
        heading={brandsHeadingInfo.heading}
        text={brandsHeadingInfo.text}
        classContainer={brandsHeadingInfo.classContainer}
        classWrapper={brandsHeadingInfo.classWrapper}
        classHeading={brandsHeadingInfo.classHeading}
        classText={brandsHeadingInfo.classText}
      />
      <div className={styles.container}>
        {brandsData.map(({ imgSrc, id }: IBrand) => {
          return (
            <div className={styles.box} key={id}>
              <Image src={imgSrc} alt="brand logo" width={200} height={120} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BrandsOverview;
