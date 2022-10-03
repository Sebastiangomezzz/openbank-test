import React from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
}
export const Layout = ({ header, children }: LayoutProps): JSX.Element => {
  return (
    <>
      <header>
        {header}
      </header>
      <div className={styles.container}>{children}</div>
    </>
  );
};
