import React from "react";
import styles from "./AdminLayout.module.scss";
import SideBar from "./SideBar/SideBar";

const AdminLayout = ({ children }) => {
  return (
    <div className={styles.AdminLayout}>
      <SideBar />
      <div className={styles.cont}>{children}</div>
    </div>
  );
};

export default AdminLayout;
