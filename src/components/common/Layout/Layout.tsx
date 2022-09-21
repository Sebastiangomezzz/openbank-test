import React from "react";
import { Header } from "../Header/Header";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <div className={styles.container}>{children}</div>
    </>
  );
};
