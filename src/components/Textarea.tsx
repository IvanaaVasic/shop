import React from "react";
import styles from "../styles/Contact.module.scss";
import { Path, useFormContext } from "react-hook-form";

export interface IFormTextarea {
  message: string;
}

type ITextareaProps = {
  label: string; //textarea label
  required?: boolean; //true or false
  placeholder: string;
  registerField: Path<IFormTextarea>; //field name for validation
  minLength?: number; // The minimum length of the value to accept for this textarea
  expression?: RegExp; // The regex pattern for the textarea
  errorMsg?: string; // customized error message for regex pattern
};

const Textarea = ({
  label,
  required,
  placeholder,
  registerField,
  minLength,
  expression,
  errorMsg,
}: ITextareaProps) => {
  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;
  return (
    <>
      <label>{label}</label>
      <textarea
        rows={6}
        placeholder={placeholder}
        className={`${styles.fields} ${styles.textarea}`}
        {...register(registerField, {
          required,
        })}
      ></textarea>
      {errors?.[registerField]?.type === "required" && (
        <p className={styles.error}>This field is required</p>
      )}
      {errors?.[registerField]?.type === "minLength" && (
        <p className={styles.error}>
          {`${label} cannot be less than ${minLength} characters`}
        </p>
      )}
      {errors?.[registerField]?.type === "pattern" && (
        <p className={styles.error}>{`Please enter a valid ${errorMsg}`}</p>
      )}
    </>
  );
};

export default Textarea;
