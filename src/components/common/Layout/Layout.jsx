import React from "react";
import { Header } from "../Header/Header";
import styles from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header>Layout</Header>
      </header>
      <div className={styles.container}>{children}</div>
    </>
  );
};
