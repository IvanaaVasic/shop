import React from "react";
import styles from "../styles/Brand.module.scss";
import stylesHeadings from "../styles/Headings.module.scss";

import Image from "next/image";
import Heading from "./Heading";
import { urlFromThumbnail } from "../utils/image";

export interface IBrand {
  imgSrc: string;
  id: number;
}

export const brandsHeadingInfo = {
  classContainer: stylesHeadings.sectionHeadingContainer,
  classWrapper: stylesHeadings.sectionHeadingWrapper,
  classHeading: stylesHeadings.sectionHeading,
  classText: stylesHeadings.sectionText,
};
export interface IBrandHeading {
  header: string;
  description: string;
}

export interface IBrandImages {
  image: string;
  _key: string;
}
export interface IProps {
  brandHeading: IBrandHeading;
  brandImages: IBrandImages[];
}

const BrandsOverview = ({ brandHeading, brandImages }: IProps) => {
  return (
    <>
      <Heading
        heading={brandHeading.header}
        text={brandHeading.description}
        classContainer={brandsHeadingInfo.classContainer}
        classWrapper={brandsHeadingInfo.classWrapper}
        classHeading={brandsHeadingInfo.classHeading}
        classText={brandsHeadingInfo.classText}
      />
      <div className={styles.container}>
        {brandImages.map(({ image, _key }: IBrandImages) => {
          return (
            <div className={styles.box} key={_key}>
              <Image
                src={urlFromThumbnail(image)}
                alt="brand logo"
                width={200}
                height={120}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BrandsOverview;
