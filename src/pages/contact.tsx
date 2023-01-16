import React, { useState, useEffect } from "react";
import styles from "../styles/Contact.module.scss";
import Image from "next/image";
import Layout from "../components/Layout";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";

interface IFormInput {
  fullName: string;
  email: string;
  message: string;
}

const Contact = () => {
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
      errors?.fullName?.type === "required" ||
      errors?.email?.type === "required"
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [
    errors?.fullName?.type,
    errors?.email?.type,
    errors?.message?.type,
    setDisable,
  ]);

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

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label>Full name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              className={`${styles.fields} ${styles.input}`}
              {...register("fullName", {
                required: true,
              })}
            />
            {errors?.fullName?.type === "required" && (
              <p className={styles.error}>This field is required</p>
            )}
            <label htmlFor="email">Email Address</label>
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
            <label htmlFor="message">Message</label>
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
              content="send"
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

export default Contact;
