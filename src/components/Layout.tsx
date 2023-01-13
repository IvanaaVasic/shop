import React from "react";
import styles from "../styles/Layout.module.scss";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
