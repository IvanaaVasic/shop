import React from "react";
import Image from "next/image";
import CartStyle from "../styles/Cart.module.scss";

const Cart = () => {
  const isEmpty = true;
  return (
    <div className={CartStyle.cartContainer}>
      {isEmpty ? (
        <div className={CartStyle.quantityPriceHolder}>
          <div className={CartStyle.quantityPriceHolder__size}>0</div>
        </div>
      ) : (
        <div className={CartStyle.quantityPriceHolder}>
          <div className={CartStyle.quantityPriceHolder__size}>3 products</div>
          <div className={CartStyle.quantityPriceHolder__size}>
            RSD 1.200,00
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
