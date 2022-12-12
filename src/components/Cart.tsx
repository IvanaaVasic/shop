import React, { useEffect } from "react";
import Image from "next/image";
import CartStyle from "../styles/Cart.module.scss";
import { useSelector } from "react-redux";

const Cart = () => {
  let isEmpty: boolean;

  const productsCart = useSelector((state: any) => state.sample);

  if (productsCart[0]) {
    isEmpty = productsCart[0]?.isEmpty;
  } else {
    isEmpty = true;
  }

  let totalPrice = 0;
  if (Array.isArray(productsCart)) {
    productsCart.forEach((product) => {
      totalPrice += Number(product.price);
    });
  }

  const priceFor = Intl.NumberFormat("en-US");
  const new_priceFor = priceFor.format(totalPrice);

  return (
    <div className={CartStyle.cartContainer}>
      {isEmpty ? (
        <div className={CartStyle.quantityPriceHolder}>
          <div className={CartStyle.quantityPriceHolder__size}>0</div>
        </div>
      ) : (
        <div className={CartStyle.quantityPriceHolder}>
          <div
            className={CartStyle.quantityPriceHolder__size}
          >{`${productsCart.length} products`}</div>
          <div className={CartStyle.quantityPriceHolder__size}>
            {`RSD ${new_priceFor}`}
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
