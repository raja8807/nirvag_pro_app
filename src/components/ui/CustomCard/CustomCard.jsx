import React from "react";
import styles from "./CustomCard.module.scss";

const CustomCard = ({ children, head, leftElement, rightElement }) => {
  return (
    <div className={styles.CustomCard}>
      <div className={styles.topBar}>
        <div className={styles.left}>
          <h2>{head}</h2>
          {leftElement}
        </div>
        {rightElement}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default CustomCard;
