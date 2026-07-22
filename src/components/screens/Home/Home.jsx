"use client";

import React from "react";
import styles from "./Home.module.scss";
import PageLayout from "@/components/ui/PageLayout/PageLayout";

import DashboardHeader from "./sections/Header/DashboardHeader";
import KPIGrid from "./sections/KPIGrid/KPIGrid";
import ChartsContainer from "./sections/ChartsContainer/ChartsContainer";
import QuickActions from "./sections/QuickActions/QuickActions";
import DashboardTables from "./sections/DataTablesArea/DashboardTables";
import RightSidebar from "./sections/RightSidebar/RightSidebar";

export default function HomeScreen() {
  return (
    <>
      <DashboardHeader />
      <PageLayout>
        <div className={styles.homeContainer}>
          
          {/* Main Dashboard Column */}
          <div className={styles.mainContent}>
            <KPIGrid />
            <ChartsContainer />
            <QuickActions />
            <DashboardTables />
          </div>

          {/* Right Sidebar */}
          <div className={styles.sidebar}>
            <RightSidebar />
          </div>
          
        </div>
      </PageLayout>
    </>
  );
}
