import React from "react";
import styles from "../styles/ProductCard.module.scss";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import priceFormatting from "../utils/priceFormatting";
import { urlFromThumbnail } from "../utils/image";
import Button from "../components/Button";

export interface IProduct {
  image: string;
  brand: string;
  name: string;
  price: number;
  quantity: number;
  isEmpty: boolean;
}
interface IProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: number;
  cart: IProduct[];
  setCart: (value: IProduct[]) => void;
}

const ProductCard = ({
  image,
  brand,
  name,
  price,
  setCart,
  cart,
}: IProductCardProps) => {
  const addToCart = (event: React.MouseEvent) => {
    setCart([
      ...cart,
      {
        image: image,
        brand: brand,
        name: name,
        price: price,
        quantity: 1,
        isEmpty: false,
      },
    ]);

    event.preventDefault();
  };

  const formatedPrice = priceFormatting(price);

  return (
    <div className={styles.productCard__cardContainer}>
      <div className={styles.productCard__imageHolder}>
        <Image
          src={urlFromThumbnail(image)}
          alt="product"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.productCard__cardInfoContainer}>
        <div className={styles.productCard__badgeHolder}>
          <div className={styles.productCard__badge}>{brand}</div>
        </div>
        <div className={styles.productCard__infoCardHolder}>
          <p className={styles.productCard__productName}>{name}</p>
          <p>{`${formatedPrice} RSD`}</p>
          <Button
            btnType="button"
            theme="primary"
            content={<MdOutlineShoppingCart size={25} />}
            size="fullWidth"
            handleClick={addToCart}
            disable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
