import React from "react";
import styles from "../styles/SectionHeadings.module.scss";

export interface IHeading {
  heading: string;
  text: string;
}

const SectionHeading = ({ heading, text }: IHeading) => {
  return (
    <div className={styles.sectionHeadingContainer}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default SectionHeading;
