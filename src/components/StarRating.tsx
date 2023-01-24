import React, { useState } from "react";
import styles from "../styles/Product.module.scss";

const StarRating = ({
  count,
  value,
  inactiveColor = "#ddd",
  size = 24,
  activeColor = "#00423f",
  onChange,
}: any) => {
  console.log(value);
  const [state, setState] = useState(value);

  const stars = Array.from({ length: count }, () => "★");

  const handleChange = (value: any) => {
    onChange(value + 1);
    setState(value + 1);
  };
  const hoverRating = (value: any) => {
    onChange(value + 1);
  };
  const removeHover = (value: any) => {
    onChange(value);
  };
  return (
    <div className={styles.ratingWrapper}>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span
            className={styles.star}
            key={index}
            style={{
              color: style,
              fontSize: size,
            }}
            onClick={() => handleChange(index)}
            onMouseEnter={() => {
              hoverRating(index);
            }}
            onMouseLeave={() => {
              removeHover(state);
            }}
          >
            {s}
          </span>
        );
      })}
      <span className={styles.rate}>{value}</span>
    </div>
  );
};

export default StarRating;
