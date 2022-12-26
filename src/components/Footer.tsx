import React from "react";
import styles from "../styles/Footer.module.scss";
import Image from "next/image";

export const contactInfo = {
  street: "Bulevar Kralja Aleksandra 79",
  phone: "+381 11 123 4567",
  mail: "post@getadigital.com",
};

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <p className={styles.contactDetails}>{contactInfo.street}</p>
        <p className={styles.contactDetails}>{contactInfo.phone}</p>
        <p className={styles.contactDetails}>{contactInfo.mail}</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9031543703004!2d20.479170051780066!3d44.803162285223664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa19436b4f3%3A0x87f6539bfdb84859!2sBulevar%20kralja%20Aleksandra%2079%2C%20Beograd!5e0!3m2!1sen!2srs!4v1671196683215!5m2!1sen!2srs"
        loading="lazy"
        className={styles.map}
      ></iframe>
      <div className={styles.logoCategoriesWrapper}>
        <img src="/images/geta_logo_white.svg"></img>
        <p className={styles.copyright}>
          Geta Commerce {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className={styles.socialIcons}>
          <Image
            src="/images/icons/facebook.png"
            alt="facebook icon"
            width={24}
            height={24}
          />
          <Image
            src="/images/icons/instagram.png"
            alt="instagram icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
