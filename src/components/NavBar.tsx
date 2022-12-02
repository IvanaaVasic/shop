import React from "react";
import Cart from "./Cart";
import styles from "../styles/NavBar.module.scss";
import Image from "next/image";
import NextLink from "next/link";
import data from "../../public/json/navData.json";

const NavBar = () => {
  return (
    <header className={styles.container}>
      <Image src="/images/geta-logo.png" alt="Logo" width={130} height={40} />
      <div className={styles.navigationCartContainer}>
        <nav className={styles.navigation}>
          {data?.data.map((nav) => {
            return (
              <NextLink href={nav.path} className={styles.navigation__link}>
                {nav.name}
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
