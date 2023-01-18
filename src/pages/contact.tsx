import React, { useState, useEffect } from "react";
import styles from "../styles/Contact.module.scss";
import Image from "next/image";
import Layout from "../components/Layout";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import Button from "../components/Button";
import client from "../utils/sanityClient";
import { urlFromThumbnail } from "../utils/image";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

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
  const methods = useForm<IFormInput>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  useEffect(() => {
    const { message, firstName, email, lastName, subject } = errors;
    const errorTypes = [
      message?.type,
      firstName?.type,
      email?.type,
      lastName?.type,
      subject?.type,
    ];
    if (
      errorTypes.includes("required") ||
      errorTypes.includes("minLength") ||
      errorTypes.includes("pattern")
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [
    errors?.firstName?.type,
    errors?.lastName?.type,
    errors?.email?.type,
    errors?.message?.type,
    errors?.subject?.type,
    setDisable,
  ]);

  const expression =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
          <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="First Name"
                inputType="text"
                placeholder="Your First Name"
                registerField="firstName"
                required
                minLength={3}
              />
              <Input
                label="Last Name"
                inputType="text"
                placeholder="Your Last Name"
                registerField="lastName"
                required
                minLength={3}
              />
              <Input
                label="Email"
                inputType="text"
                placeholder="Your Email Address "
                registerField="email"
                required
                minLength={3}
                expression={expression}
                errorMsg="email address"
              />
              <Input
                label="Subject"
                inputType="text"
                placeholder="Subject"
                registerField="subject"
                required
              />
              <Textarea
                label="Message"
                required
                placeholder="Your Message"
                registerField="message"
              />
              <Button
                btnType="submit"
                theme="primary"
                content="send message"
                size="regular"
                disable={disable}
              />
            </form>
          </FormProvider>
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
