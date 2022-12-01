import React from "react";
import Cart from "./Cart";
import NavBarStyle from "../styles/NavBar.module.scss";
import Image from "next/image";
import NextLink from "next/link";

const NavBar = () => {
  return (
    <header className={NavBarStyle.container}>
      <Image src="/images/geta-logo.png" alt="Logo" width={130} height={40} />
      <div className={NavBarStyle.navigationCartContainer}>
        <nav className={NavBarStyle.navigation}>
          <NextLink href="/" className={NavBarStyle.navigation__link}>
            HOME
          </NextLink>
          <NextLink href="/checkout" className={NavBarStyle.navigation__link}>
            CHECKOUT
          </NextLink>
          <NextLink href="/contact" className={NavBarStyle.navigation__link}>
            CONTACT
          </NextLink>
          <NextLink href="/product" className={NavBarStyle.navigation__link}>
            PRODUCT
          </NextLink>
        </nav>
        <Cart />
      </div>
    </header>
  );
};

export default NavBar;
