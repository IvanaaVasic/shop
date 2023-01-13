import React from "react";
import styles from "../styles/Contact.module.scss";
import Image from "next/image";
import Layout from "../components/Layout";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.sectionWrapper} ${styles.imageSection}`}>
        <Image
          src="/images/contact/contact3.jpg"
          alt="product"
          fill
          objectFit="cover"
          className={styles.img}
        />
        <section className={styles.contactInfoWrapper}>
          <div className={styles.iconHeaderWrapper}>
            <GoLocation size={25} color="white" />
            <h3 className={styles.heading}>Address</h3>
          </div>
          <p className={styles.contactInfo}>Bulevar Kralja Aleksandra 79</p>
        </section>
        <section className={styles.contactInfoWrapper}>
          <div className={styles.iconHeaderWrapper}>
            <BsTelephone size={25} color="white" />
            <h3 className={styles.heading}>Phone</h3>
          </div>
          <p className={styles.contactInfo}>+381 11 123 4567</p>
        </section>
        <section className={styles.contactInfoWrapper}>
          <div className={styles.iconHeaderWrapper}>
            <AiOutlineMail size={25} color="white" />
            <h3 className={styles.heading}>Email</h3>
          </div>
          <p className={styles.contactInfo}>post@getadigital.com</p>
        </section>
      </div>
      <div className={`${styles.sectionWrapper} ${styles.formSection}`}>
        <div className={styles.formWrapper}>
          <h1 className={styles.contactHeader}>Contact us</h1>
          <p className={styles.subtitle}>
            We're open for any suggestion or just to have a chat
          </p>

          <form id="contact-form" className={styles.form} method="post">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              required
              className={`${styles.fields} ${styles.input}`}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              required
              className={`${styles.fields} ${styles.input}`}
            />
            <label htmlFor="message">Message</label>
            <textarea
              rows={6}
              placeholder="Your Message"
              id="message"
              name="message"
              required
              className={`${styles.fields} ${styles.textarea}`}
            ></textarea>
            {/* <!--<a href="javascript:void(0)">--><button type="submit" id="submit" name="submit">Send</button><!--</a>--> */}
          </form>
          <div id="error"></div>
          <div id="success-msg"></div>
        </div>
      </div>
    </div>
  );
};

Contact.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Contact;
