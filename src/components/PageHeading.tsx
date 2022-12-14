import React from "react";
import styles from "../styles/PageHeading.module.scss";

export interface IPageHeading {
  heading: string;
  text: string;
}

const PageHeading = ({ heading, text }: IPageHeading) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default PageHeading;
