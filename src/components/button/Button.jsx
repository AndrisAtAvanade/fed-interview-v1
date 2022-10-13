import React from "react";
import styles from "./Button.module.scss";

const Button = ({children, onClick, isActive}) => {

  return (
    <button
      type="button"
      className={styles.btn + (isActive ? ` ${styles.active}` : "")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
