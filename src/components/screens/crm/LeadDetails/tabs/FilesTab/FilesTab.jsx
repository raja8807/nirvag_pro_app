import React from "react";
import styles from "./FilesTab.module.scss";

const FilesTab = () => {
  return (
    <div className={styles.card}>
      <h3>Uploaded Documents</h3>
      <p className={styles.emptyText}>No quotations uploaded yet.</p>
      <button className={styles.secondaryBtn}>Upload Quotation</button>
    </div>
  );
};

export default FilesTab;
