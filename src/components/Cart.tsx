import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Cart.module.scss";
import { useSelector } from "react-redux";
import pricingCalculator from "../utils/pricingCalculator";
import priceFormatting from "../utils/priceFormatting";

const Cart = () => {
  const productsCart = useSelector((state: any) => state.sample);

  let isEmpty;
  if (productsCart[0]) {
    isEmpty = productsCart[0]?.isEmpty;
  } else {
    isEmpty = true;
  }

  const totalPrc = pricingCalculator(productsCart);
  const formatedPrice = priceFormatting(totalPrc);

  return (
    <div className={styles.cartContainer}>
      {isEmpty ? (
        <div className={styles.quantityPriceHolder}>
          <div className={styles.quantityPriceHolder__size}>0</div>
        </div>
      ) : (
        <div className={styles.quantityPriceHolder}>
          <div
            className={styles.quantityPriceHolder__size}
          >{`${productsCart.length} products`}</div>
          <div className={styles.quantityPriceHolder__size}>
            {`RSD ${formatedPrice}`}
          </div>
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
//
