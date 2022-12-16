import React from "react";
import styles from "../styles/Headings.module.scss";

export interface IHeading {
  heading: string;
  text: string;
  classContainer: string;
  classWrapper: string;
  classHeading: string;
  classText: string;
}

const Heading = ({
  heading,
  text,
  classContainer,
  classWrapper,
  classHeading,
  classText,
}: IHeading) => {
  return (
    <div className={classContainer}>
      <div className={classWrapper}>
        <h2 className={classHeading}>{heading}</h2>
        <p className={classText}>{text}</p>
      </div>
    </div>
  );
};

export default Heading;
