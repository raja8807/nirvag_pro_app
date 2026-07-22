"use client";

import React from "react";
import styles from "./RightSidebar.module.scss";
import ActivityTimeline from "../../components/ActivityTimeline/ActivityTimeline";
import { AlertTriangle, Clock, CalendarDays } from "lucide-react";

export default function RightSidebar() {
  return (
    <div className={styles.rightSidebar}>
      
      {/* Alerts & Notifications Widget */}
      <div className={styles.widget}>
        <h3>Action Needed</h3>
        <div className={styles.alertsList}>
          <div className={`${styles.alertItem} ${styles.danger}`}>
            <AlertTriangle size={16} color="var(--danger-color)" />
            <div className={styles.alertContent}>
              <h4>Overdue Project</h4>
              <p>Project Alpha is 2 days past expected milestone.</p>
            </div>
          </div>
          <div className={`${styles.alertItem} ${styles.warning}`}>
            <Clock size={16} color="var(--warning-color)" />
            <div className={styles.alertContent}>
              <h4>Pending PO Approval</h4>
              <p>PO-2026-089 requires your approval.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar / Meetings */}
      <div className={styles.widget}>
        <h3>Schedule</h3>
        <div className={styles.calendarWidget}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <CalendarDays size={24} />
            <span>No meetings scheduled today</span>
          </div>
        </div>
      </div>

      {/* Activity Timeline Widget */}
      <div className={styles.widget}>
        <h3>Recent Activity</h3>
        <ActivityTimeline />
      </div>

    </div>
  );
}
