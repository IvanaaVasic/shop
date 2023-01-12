import React from "react";
import styles from "../styles/Testimonials.module.scss";
import stylesHeadings from "../styles/Headings.module.scss";
import Image from "next/image";
import Heading from "./Heading";
import { urlFromThumbnail } from "../utils/image";

export interface ITestimonialsHeading {
  header: string;
  description: string;
}
export interface ITestimonials {
  image: string;
  comment: string;
  person: string;
  classBox: string;
  _key: string;
}
export interface IProps {
  testimonialsHeading: ITestimonialsHeading;
  testimonials: ITestimonials[];
}

export const testimonialsStyling = {
  classContainer: stylesHeadings.sectionHeadingContainer,
  classWrapper: stylesHeadings.sectionHeadingWrapper,
  classHeading: stylesHeadings.sectionHeading,
  classText: stylesHeadings.sectionText,
};

const Testimonials = ({ testimonialsHeading, testimonials }: IProps) => {
  return (
    <>
      <Heading
        heading={testimonialsHeading.header}
        text={testimonialsHeading.description}
        classContainer={testimonialsStyling.classContainer}
        classWrapper={testimonialsStyling.classWrapper}
        classHeading={testimonialsStyling.classHeading}
        classText={testimonialsStyling.classText}
      />
      <div className={styles.container}>
        {testimonials.map(
          ({ classBox, _key, image, comment, person }: ITestimonials) => {
            return (
              <div
                className={`${styles[classBox]} ${styles.boxDecoration}`}
                key={_key}
              >
                <Image
                  src={urlFromThumbnail(image)}
                  alt="avatar"
                  width={100}
                  height={100}
                  className={styles.avatar}
                />
                <p className={styles.testimoialText}>{comment}</p>
                <p className={styles.person}>{person} </p>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Testimonials;
