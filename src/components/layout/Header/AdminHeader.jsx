"use client";

import React from "react";
import styles from "./AdminHeader.module.scss";
import { ChevronRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const AdminHeader = ({ setSidebarCollapsed }) => {
  const pathName = usePathname();

  const crumbs = pathName.split("/");

  return (
    <div className={styles.AdminHeader}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Menu
            onClick={() => {
              setSidebarCollapsed((prev) => !prev);
            }}
          />
          <h3>
            {crumbs.map((crumb, idx) => {
              if (!crumb) return null;

              return (
                <span key={`crumb_${idx}`}>
                  {crumb}
                  {idx !== crumbs.length - 1 && <ChevronRight className={styles.chev} />}
                </span>
              );
            })}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
