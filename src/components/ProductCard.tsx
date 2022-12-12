import React from "react";
import styles from "../styles/ProductCard.module.scss";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";

export interface Product {
  image: string;
  brand: string;
  name: string;
  price: string;
  quantity: number;
  isEmpty: boolean;
}
interface ProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: string;
  cart: Product[];
  setCart: (value: Product[]) => void;
}

const ProductCard = ({
  image,
  brand,
  name,
  price,
  setCart,
  cart,
}: ProductCardProps) => {
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

  const priceFor = Intl.NumberFormat("en-US");
  const new_priceFor = priceFor.format(Number(price));

  return (
    <div className={styles.productCard__cardContainer}>
      <div className={styles.productCard__imageHolder}>
        <Image src={image} alt="product" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.productCard__cardInfoContainer}>
        <div className={styles.productCard__badgeHolder}>
          <div className={styles.productCard__badge}>{brand}</div>
        </div>
        <div className={styles.productCard__infoCardHolder}>
          <p className={styles.productCard__productName}>{name}</p>
          <p>{`${new_priceFor} rsd`}</p>
          <button className={styles.productCard__btn} onClick={addToCart}>
            <MdOutlineShoppingCart size={28} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
