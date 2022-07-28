import React from "react";
import styles from "./ScrollDown.module.scss";

const ScrollDown = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mouse}></div>
      <p className={styles.text}>Scroll</p>
    </div>
  );
};

export default ScrollDown;
