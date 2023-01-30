import React from "react";
import styles from "../styles/Checkbox.module.scss";

export interface IProps {
  checked: boolean;
  setChecked: (value: boolean) => void;
}

const Checkbox = ({ checked, setChecked }: IProps) => {
  const isChecked = () => {
    setChecked(!checked);
  };
  return (
    <div className={styles.checkboxWrapper}>
      <input
        className={styles.checkbox}
        id="cbx"
        type="checkbox"
        onChange={isChecked}
      />
      <label className={styles.terms} htmlFor="cbx">
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span className={styles.label}>I agree to Terms & Conditions.</span>
      </label>
    </div>
  );
};

export default Checkbox;
