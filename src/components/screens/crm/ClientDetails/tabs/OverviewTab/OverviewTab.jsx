import React from "react";
import styles from "./OverviewTab.module.scss";

export default function OverviewTab({ client }) {
  if (!client) return null;
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>Company Details</h3>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <span className={styles.label}>Contact Person</span>
            <span className={styles.value}>{client.contactPerson}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Phone</span>
            <span className={styles.value}>{client.phone}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>{client.email}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>GST Number</span>
            <span className={styles.value}>{client.gst}</span>
          </div>
          <div className={styles.gridItemFull}>
            <span className={styles.label}>Address</span>
            <span className={styles.value}>{client.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
