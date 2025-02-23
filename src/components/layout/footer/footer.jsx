import React from "react";
import Logo from "@ui/logo/logo";
import styles from "./style.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <span className={styles.footer__copyright}>Создано 2021</span>
    </footer>
  );
}

export default Footer;
