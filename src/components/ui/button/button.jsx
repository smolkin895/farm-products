import React from "react";
import styles from "./style.module.css";

export default function Button({ children, minWidth }) {
  return (
    <button type="button" style={{ minWidth: minWidth }} className={styles.button}>
      {children}
    </button>
  );
}
