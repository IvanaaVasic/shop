import React from "react";
import styles from "../styles/Contact.module.scss";
import Image from "next/image";
import { urlFromThumbnail } from "../utils/image";

export interface IContactInfo {
  heading: string;
  info: string;
  image: string;
  _key: string;
}
export interface IContactProps {
  contactInfo: IContactInfo[];
}

const ContactDescription = ({ contactInfo }: IContactProps) => {
  return (
    <div className={`${styles.sectionWrapper} ${styles.imageSection}`}>
      <Image
        src="/images/contact/contact3.jpg"
        alt="contact image"
        fill
        objectFit="cover"
        className={styles.img}
      />
      {contactInfo.map(({ heading, info, image, _key }: IContactInfo) => {
        return (
          <section className={styles.contactInfoWrapper} key={_key}>
            <div className={styles.iconHeaderWrapper}>
              <Image
                src={urlFromThumbnail(image)}
                alt="contact icon"
                width={20}
                height={20}
              />
              <h3 className={styles.heading}>{heading}</h3>
            </div>
            <p className={styles.contactInfo}>{info}</p>
          </section>
        );
      })}
    </div>
  );
};

export default ContactDescription;
