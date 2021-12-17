import React from "react";
import styles from "./button.module.css";

export default function Button({
  children = "Button",
  type = "button",
  isDisabled = false,
  onClick,
  title,
  ariaLabel,
}) {
  return (
    <button
      className={styles.button}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
