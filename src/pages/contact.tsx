import React, { useState, useEffect } from "react";
import styles from "../styles/Contact.module.scss";
import Layout from "../components/Layout";
import client from "../utils/sanityClient";
import ContactDescription from "../components/ContactDescription";
import ContactForm from "../components/ContactForm";

export interface IContactInfo {
  heading: string;
  info: string;
  image: string;
  _key: string;
}
export interface IContactProps {
  contactInfo: IContactInfo[];
}

const Contact = ({ contactInfo }: IContactProps) => {
  return (
    <div className={styles.container}>
      <ContactDescription contactInfo={contactInfo} />
      <ContactForm />
    </div>
  );
};

Contact.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const contactInfo = await client.fetch(
    `*[_type == "page"][1].body[1].contact`
  );

  return {
    props: {
      contactInfo,
    },
  };
}
export default Contact;
