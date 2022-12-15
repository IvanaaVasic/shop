import React from "react";
import Cart from "./Cart";
import styles from "../styles/NavBar.module.scss";
import Image from "next/image";
import NextLink from "next/link";

export interface INavigation {
  name: string;
  path: string;
}
const data = [
  { name: "HOME", path: "/" },
  { name: "CHECKOUT", path: "/checkout" },
  { name: "CONTACT", path: "/contact" },
  { name: "PRODUCT", path: "/product" },
];

const NavBar = () => {
  return (
    <header className={styles.container}>
      <Image src="/images/geta-logo.png" alt="Logo" width={130} height={40} />
      <div className={styles.navigationCartContainer}>
        <nav className={styles.navigation}>
          {data?.map(({ name, path }: INavigation, idx) => {
            return (
              <NextLink
                href={path}
                className={styles.navigation__link}
                key={idx}
              >
                {name}
              </NextLink>
            );
          })}
        </nav>
        <Cart />
      </div>
    </header>
  );
};

export default NavBar;
