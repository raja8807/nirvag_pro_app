"use client";

import React from "react";
import styles from "./DashboardHeader.module.scss";
import { Search } from "lucide-react";

export default function DashboardHeader() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h1>Good Morning, Admin 👋</h1>
        <p>Here's what's happening with your business today: {currentDate}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.search}>
          <Search size={16} />
          <input type="text" placeholder="Search projects, leads, or invoices..." />
        </div>
        <select className={styles.filterSelect}>
          <option value="all">All Companies</option>
          <option value="c1">Nirvag Pro Builders</option>
          <option value="c2">Nirvag Pro Interiors</option>
        </select>
        <select className={styles.filterSelect}>
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
        <div className={styles.profileIcon}>AD</div>
      </div>
    </div>
  );
}
