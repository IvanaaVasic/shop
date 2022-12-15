import React from "react";
import styles from "../styles/Testimonials.module.scss";
import stylesHeadings from "../styles/Headings.module.scss";
import Image from "next/image";
import Heading from "./Heading";

export interface ITestimonials {
  imgSrc: string;
  comment: string;
  person: string;
  boxClass: string;
  id: number;
}

export const testimonialsInfo = [
  {
    imgSrc: "/images/avatars/1.jpg",
    comment:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    person: "- Mark McDonald",
    boxClass: styles.boxOne,
    id: 1,
  },
  {
    imgSrc: "/images/avatars/4.jpg",
    comment:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ",
    person: "- Phoebe Adebola",
    boxClass: styles.boxTwo,
    id: 2,
  },
  {
    imgSrc: "/images/avatars/3.jpg",
    comment: "Duis aute irure dolor in reprehenderit in voluptate ",
    person: "- Bruno Dáire",
    boxClass: styles.boxThree,
    id: 3,
  },
];
export const testimonialsHeadingInfo = {
  heading: "What our clients say about us",
  text: "~ TESTIMONIALS ~",
  classContainer: stylesHeadings.sectionHeadingContainer,
  classWrapper: stylesHeadings.sectionHeadingWrapper,
  classHeading: stylesHeadings.sectionHeading,
  classText: stylesHeadings.sectionText,
};

const Testimonials = () => {
  return (
    <>
      <Heading
        heading={testimonialsHeadingInfo.heading}
        text={testimonialsHeadingInfo.text}
        classContainer={testimonialsHeadingInfo.classContainer}
        classWrapper={testimonialsHeadingInfo.classWrapper}
        classHeading={testimonialsHeadingInfo.classHeading}
        classText={testimonialsHeadingInfo.classText}
      />
      <div className={styles.container}>
        {testimonialsInfo.map(
          ({ boxClass, id, imgSrc, comment, person }: ITestimonials) => {
            return (
              <div className={`${boxClass} ${styles.boxDecoration}`} key={id}>
                <Image
                  src={imgSrc}
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
