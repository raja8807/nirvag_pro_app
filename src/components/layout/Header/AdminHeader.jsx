import React from "react";
import styles from "./AdminHeader.module.scss";
import { Menu } from "lucide-react";

const AdminHeader = ({ setSidebarCollapsed }) => {
  return (
    <div className={styles.AdminHeader}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Menu
            onClick={() => {
              setSidebarCollapsed((prev) => !prev);
            }}
          />
          <h3>Dashboard</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
