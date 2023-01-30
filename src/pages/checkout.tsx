import React, { useEffect, useState } from "react";
import styles from "../styles/Checkout.module.scss";
import Layout from "../components/Layout";
import client from "../utils/sanityClient";
import Image from "next/image";
import { urlFromThumbnail } from "../utils/image";
import Button from "../components/Button";
import priceFormatting from "../utils/priceFormatting";
import Checkbox from "../components/Checkbox";
import { useMediaQuery } from "../hooks/useMediQuery";

export interface IProduct {
  image: string;
  brand: string;
  name: string;
  price: number;
  quantity: number;
  isEmpty: boolean;
  id: string;
}

const Checkout = () => {
  //   const [cart, setCart] = useLocalStorage("cart", []);

  const [cart, setCart] = useState<IProduct[]>([]);
  //when page is rendered
  useEffect(() => {
    const cart = localStorage.getItem("cart");

    setCart(cart ? JSON.parse(cart) : []);
  }, []);

  //when localstorage is updated
  useEffect(() => {
    const handleStorage = () => {
      const cart = localStorage.getItem("cart");

      setCart(cart ? JSON.parse(cart) : []);
    };

    window.addEventListener("storage", () => handleStorage());
    return () => window.removeEventListener("storage", () => handleStorage());
  }, []);

  const increaseQuantity = (id: string, price: number, quantity: number) => {
    let newCart;
    const originalPrice = price / quantity;

    if (cart?.some((item) => item.id === id)) {
      newCart = cart?.map((item) => {
        if (item.id === id) {
          const newQ = item?.quantity + 1;
          const newPrice = item?.price + originalPrice;
          return { ...item, quantity: newQ, price: newPrice };
        } else return item;
      });
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("storage"));
  };

  const decreaseQuantity = (id: string, price: number, quantity: number) => {
    let newCart;
    const originalPrice = price / quantity;

    if (cart?.some((item) => item.id === id)) {
      newCart = cart?.map((item) => {
        if (item.id === id) {
          const newQ = item?.quantity - 1;
          const newPrice = item.price - originalPrice;

          return { ...item, quantity: newQ, price: newPrice };
        } else return item;
      });
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("storage"));
  };

  const totalPrice = cart.reduce((acc, cur) => cur.price + acc, 0);
  const tax = (totalPrice * 20) / 100;

  const [checked, setChecked] = useState<boolean>(true);

  const isMd = useMediaQuery(780);

  return (
    <div className={styles.container}>
      <div className={styles.productListWrapper}>
        <h1 className={styles.header}>Your shopping cart</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Image</th>
              <th className={styles.tableHeader}>Brand</th>
              {isMd ? (
                <th className={styles.empty}></th>
              ) : (
                <th className={styles.tableHeader}>Name</th>
              )}
              <th className={styles.tableHeader}>Quantity</th>
              {isMd ? (
                <th className={styles.empty}></th>
              ) : (
                <th className={styles.tableHeader}>Price</th>
              )}
              <th className={styles.tableHeader}>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((product: IProduct) => {
              return (
                <tr key={product.id} className={styles.infoRow}>
                  <td className={styles.tableData}>
                    <Image
                      src={urlFromThumbnail(product.image)}
                      alt="product image"
                      width={60}
                      height={60}
                      className={styles.productImg}
                    />
                  </td>
                  <td className={styles.tableData}>
                    <p>{product.brand}</p>
                  </td>
                  {isMd ? (
                    <td className={styles.empty}></td>
                  ) : (
                    <td className={styles.tableData}>
                      <p>{product.name}</p>
                    </td>
                  )}

                  <td className={styles.tableData}>
                    <div className={styles.quantitiWrapper}>
                      <Button
                        btnType="button"
                        theme="primary"
                        content="-"
                        size="auto"
                        handleClick={() =>
                          decreaseQuantity(
                            product.id,
                            product.price,
                            product.quantity
                          )
                        }
                        disable={false}
                      />
                      <p className={styles.quantity}>{product.quantity}</p>
                      <Button
                        btnType="button"
                        theme="primary"
                        content="+"
                        size="auto"
                        handleClick={() =>
                          increaseQuantity(
                            product.id,
                            product.price,
                            product.quantity
                          )
                        }
                        disable={false}
                      />
                    </div>
                  </td>
                  {isMd ? (
                    <td className={styles.empty}></td>
                  ) : (
                    <td className={styles.tableData}>
                      <p>{`RSD ${priceFormatting(
                        product.price / product.quantity
                      )}`}</p>
                    </td>
                  )}

                  <td className={styles.tableData}>
                    <p>{`RSD ${priceFormatting(product.price)}`}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.checkoutWrapper}>
        <h1 className={styles.paymentHeader}>Payment Info</h1>
        <div className={styles.paymentInfoWrapper}>
          <div className={styles.totalWrapper}>
            <p className={styles.title}>Subtotal:</p>
            <p className={styles.priceInfo}>{`RSD ${priceFormatting(
              totalPrice
            )}`}</p>
          </div>
          <div className={styles.totalWrapper}>
            <p className={styles.title}>Tax (20%):</p>
            <p className={styles.priceInfo}>{`RSD ${priceFormatting(tax)}`}</p>
          </div>
          <div className={styles.totalContainer}>
            <p className={styles.titleTotal}>Total:</p>
            <p className={styles.priceInfoTotal}>{`RSD ${priceFormatting(
              totalPrice + tax
            )}`}</p>
          </div>
        </div>

        <form className={styles.termsContainer}>
          <Checkbox checked={checked} setChecked={setChecked} />
          <div>
            <Button
              btnType="button"
              theme="secondary"
              content="Buy"
              size="fullWidth"
              disable={checked}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Checkout.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Checkout;
