'use client'

import React, { useState } from "react";
import styles from "./AdminLayout.module.scss";
import SideBar from "./SideBar/SideBar";
import AdminHeader from "../Header/AdminHeader";


const AdminLayout = ({ children }) => {

  const [sideBarCollapsed, setSidebarCollapsed] = useState(false);


  return (
    <div className={styles.AdminLayout}>
      <SideBar 
      setSidebarCollapsed={setSidebarCollapsed}
      sideBarCollapsed={sideBarCollapsed}
      />
      <div className={styles.right}>
        <AdminHeader 
        setSidebarCollapsed={setSidebarCollapsed}
        />
        <div className={styles.cont}>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
