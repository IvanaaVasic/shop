import React, { useState, useEffect } from "react";
import styles from "../styles/Contact.module.scss";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

export interface IFormInput {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [disable, setDisable] = useState<boolean>(false);
  const methods = useForm<IFormInput>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const expression =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
  return (
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
  );
};

export default ContactForm;
