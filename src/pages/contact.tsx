import React, { useState, useEffect } from "react";
import styles from "../styles/Contact.module.scss";
import Image from "next/image";
import Layout from "../components/Layout";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import client from "../utils/sanityClient";
import { urlFromThumbnail } from "../utils/image";

export interface IFormInput {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  message: string;
}
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
  const [disable, setDisable] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  useEffect(() => {
    if (
      errors?.message?.type === "required" ||
      errors?.firstName?.type === "required" ||
      errors?.email?.type === "required" ||
      errors?.lastName?.type === "required" ||
      errors?.subject?.type === "required"
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [
    errors?.firstName?.type,
    errors?.email?.type,
    errors?.message?.type,
    setDisable,
  ]);

  return (
    <div className={styles.container}>
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
      <div className={`${styles.sectionWrapper} ${styles.formSection}`}>
        <div className={styles.formWrapper}>
          <h1 className={styles.contactHeader}>Contact us</h1>
          <p className={styles.subtitle}>
            We're open for any suggestion or just to have a chat
          </p>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label>First name</label>
            <input
              type="text"
              placeholder="Your First Name"
              className={`${styles.fields} ${styles.input}`}
              {...register("firstName", {
                required: true,
              })}
            />
            {errors?.firstName?.type === "required" && (
              <p className={styles.error}>This field is required</p>
            )}
            <label>Last name</label>
            <input
              type="text"
              placeholder="Your Last Name"
              className={`${styles.fields} ${styles.input}`}
              {...register("lastName", {
                required: true,
              })}
            />
            {errors?.lastName?.type === "required" && (
              <p className={styles.error}>This field is required</p>
            )}
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Your Email Address"
              className={`${styles.fields} ${styles.input}`}
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email?.type === "required" && (
              <p className={styles.error}>This field is required</p>
            )}
            <label>Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className={`${styles.fields} ${styles.input}`}
              {...register("subject", {
                required: true,
              })}
            />
            {errors?.subject?.type === "required" && (
              <p className={styles.error}>This field is required</p>
            )}
            <label>Message</label>
            <textarea
              rows={6}
              placeholder="Your Message"
              className={`${styles.fields} ${styles.textarea}`}
              {...register("message", {
                required: true,
              })}
            ></textarea>
            {errors?.message?.type === "required" && (
              <p className={styles.error}>This field is required</p>
            )}
            <Button
              btnType="submit"
              theme="primary"
              content="send message"
              size="regular"
              disable={disable}
            />
          </form>
        </div>
      </div>
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
