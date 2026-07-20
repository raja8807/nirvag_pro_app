import React from "react";
import styles from "./PlaceholderTab.module.scss";

const PlaceholderTab = ({ title }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p className={styles.emptyText}>No data available for {title.toLowerCase()} yet.</p>
    </div>
  );
};

export default PlaceholderTab;
