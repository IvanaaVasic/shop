import React from "react";
import styles from "../styles/Button.module.scss";

export interface IButtonProps {
  btnType: "button" | "submit" | "reset" | undefined;
  theme: string; // primary or secondary
  content: JSX.Element | string; // icon or text
  size: string; // regular or fullWidth
  handleClick?: (event: React.MouseEvent) => void; //optional
  disable: boolean; //true or false
}

const Button = ({
  btnType,
  theme,
  content,
  size,
  handleClick,
  disable,
}: IButtonProps) => {
  return (
    <button
      type={btnType}
      className={`${styles[theme]} ${styles[size]}`}
      onClick={handleClick}
      disabled={disable}
    >
      {content}
    </button>
  );
};

export default Button;
