"use client";

import React from "react";
import styles from "./KPICard.module.scss";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function KPICard({ 
  title, 
  value, 
  icon, 
  trend, 
  trendValue, 
  period = "vs last month", 
  variant = "primary" 
}) {
  const getTrendIcon = () => {
    if (trend === "up") return <TrendingUp size={14} />;
    if (trend === "down") return <TrendingDown size={14} />;
    return <Minus size={14} />;
  };

  return (
    <div className={`${styles.kpiCard} ${styles[variant]}`}>
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.iconWrapper}>
          {icon}
        </div>
      </div>
      <div className={styles.value}>{value}</div>
      {(trendValue || trend) && (
        <div className={styles.footer}>
          <span className={`${styles.trend} ${styles[trend]}`}>
            {getTrendIcon()} {trendValue}
          </span>
          <span className={styles.period}>{period}</span>
        </div>
      )}
    </div>
  );
}
