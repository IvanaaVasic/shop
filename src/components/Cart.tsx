import React from "react";
import Image from "next/image";
import styles from "../styles/Cart.module.scss";

const Cart = () => {
  const isEmpty: boolean = true;
  return (
    <div className={styles.cartContainer}>
      {isEmpty ? (
        <div className={styles.quantityPriceHolder}>
          <div className={styles.quantityPriceHolder__size}>0</div>
        </div>
      ) : (
        <div className={styles.quantityPriceHolder}>
          <div className={styles.quantityPriceHolder__size}>3 products</div>
          <div className={styles.quantityPriceHolder__size}>RSD 1.200,00</div>
        </div>
      )}
      <Image
        src="/images/shopping-cart.png"
        alt="cart icon"
        width={32}
        height={32}
      />
    </div>
  );
};

export default Cart;
