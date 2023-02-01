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
  id: string;
}
interface IProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: number;
  id: string;
  cart: IProduct[];
  setCart: (value: IProduct[]) => void;
  classContainer: string;
}

const ProductCard = ({
  image,
  brand,
  name,
  price,
  setCart,
  cart,
  id,
  classContainer,
}: IProductCardProps) => {
  const addToCart = (event: React.MouseEvent) => {
    let newCart;
    const originalPrice = price;
    if (cart.some((item) => item.id === id)) {
      newCart = cart.map((item) => {
        if (item.id === id) {
          const newQ = item.quantity + 1;
          const newPrice = item.price + originalPrice;
          return { ...item, quantity: newQ, price: newPrice };
        } else return item;
      });
    } else {
      newCart = [
        ...cart,
        {
          image: image,
          brand: brand,
          name: name,
          price: price,
          quantity: 1,
          isEmpty: false,
          id: id,
        },
      ];
    }
    setCart(newCart);

    event.preventDefault();
  };

  const formatedPrice = priceFormatting(price);

  return (
    <div className={`${classContainer}`}>
      <div className={styles.imageHolder}>
        <Image
          src={urlFromThumbnail(image)}
          alt="product"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.cardInfoContainer}>
        <div className={styles.badgeHolder}>
          <div className={styles.badge}>{brand}</div>
        </div>
        <div className={styles.infoCardHolder}>
          <p className={styles.productName}>{name}</p>
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
