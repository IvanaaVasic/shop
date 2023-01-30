import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Cart.module.scss";
import { useSelector } from "react-redux";
import pricingCalculator from "../utils/pricingCalculator";
import priceFormatting from "../utils/priceFormatting";
import Link from "next/link";

export interface IProduct {
  image: string;
  brand: string;
  name: string;
  price: number;
  quantity: number;
  isEmpty: boolean;
  id: string;
}

const Cart = () => {
  // const cart = useSelector((state: any) => state.sample);
  // console.log(cart);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    setCart(cart ? JSON.parse(cart) : []);
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      const cart = localStorage.getItem("cart");
      setCart(cart ? JSON.parse(cart) : []);
    };

    window.addEventListener("storage", () => handleStorage());
    return () => window.removeEventListener("storage", () => handleStorage());
  }, []);

  let product;

  if (cart?.length === 1) {
    product = "product";
  } else {
    product = "products";
  }

  const isEmpty = !cart || cart.length === 0;

  const totalQuanity = cart.reduce((acc, cur) => cur.quantity + acc, 0);
  console.log(totalQuanity);

  const totalPrc = pricingCalculator(cart);
  const formatedPrice = priceFormatting(totalPrc);

  return (
    <Link href={`/checkout`}>
      <div className={styles.cartContainer}>
        {isEmpty ? (
          <div className={styles.quantityPriceHolder}>
            <div className={styles.quantityPriceHolder__size}>0</div>
          </div>
        ) : (
          <div className={styles.quantityPriceHolder}>
            <div
              className={styles.quantityPriceHolder__size}
            >{`${totalQuanity} ${product}`}</div>
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
    </Link>
  );
};

export default Cart;
