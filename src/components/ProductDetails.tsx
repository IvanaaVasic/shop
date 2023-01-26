import React, { useState } from "react";
import styles from "../styles/Product.module.scss";
import priceFormatting from "../utils/priceFormatting";
import StarRating from "../components/StarRating";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";

export interface IFormInput {
  comment: string;
}

export interface IProduct {
  brand?: string;
  description?: string;
  name?: string;
  price: number;
}
export interface IProps {
  productInfo: IProduct;
}

const ProductDetails = ({ productInfo }: IProps) => {
  const { brand, description, name, price } = productInfo;
  const formatedPrice = priceFormatting(price);
  const [rating, setRating] = useState<number>(3);
  const [comment, setComment] = useState<string>();

  const methods = useForm<IFormInput>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setComment(data?.comment);
  };

  const handleChange = (value: number) => {
    setRating(value);
  };

  return (
    <div className={styles.productInfoWrapper}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.brand}>{brand}</div>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{`${formatedPrice} RSD`}</p>
      <StarRating
        count={5}
        size={40}
        value={rating}
        activeColor={"#00423f"}
        inactiveColor={"#ddd"}
        onChange={handleChange}
      />
      {comment && <div className={styles.comment}>{`"${comment}"`}</div>}
      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Add comment"
            inputType="text"
            placeholder="Add comment for this product"
            registerField="comment"
            required
            minLength={3}
          />
          <Button
            btnType="submit"
            theme="primary"
            content="Add Comment"
            size="regular"
            disable={false}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default ProductDetails;
