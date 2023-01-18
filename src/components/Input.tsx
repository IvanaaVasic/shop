import React from "react";
import styles from "../styles/Contact.module.scss";
import { Path, useFormContext } from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";

export interface IFormInput {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
}

type IInputProps = {
  label: string; //input label
  required?: boolean; //true or false
  inputType: HTMLInputTypeAttribute; //type of input field
  placeholder: string;
  registerField: Path<IFormInput>; //field name for validation
  minLength?: number; // The minimum length of the value to accept for this input
  expression?: RegExp; // The regex pattern for the input
  errorMsg?: string; // customized error message for regex pattern
};

const Input = ({
  label,
  required,
  inputType,
  placeholder,
  registerField,
  minLength,
  expression,
  errorMsg,
}: IInputProps) => {
  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;

  console.log(errors);
  return (
    <>
      <label>{label}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        className={`${styles.fields} ${styles.input}`}
        {...register(registerField, {
          required,
          minLength: minLength,
          pattern: expression,
        })}
      />
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

export default Input;
