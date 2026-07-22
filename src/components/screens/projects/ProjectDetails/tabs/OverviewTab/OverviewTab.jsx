import React from "react";
import styles from "./OverviewTab.module.scss";
import { Users, Building, Calendar, DollarSign } from "lucide-react";

export default function OverviewTab({ project }) {
  if (!project) return null;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Building size={18} className={styles.icon} />
            <h3>Project Details</h3>
          </div>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Type</span>
              <span className={styles.value}>{project.type}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Priority</span>
              <span className={styles.value}>{project.priority}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Client</span>
              <span className={styles.value}>{project.clientName}</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Calendar size={18} className={styles.icon} />
            <h3>Timeline</h3>
          </div>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Start Date</span>
              <span className={styles.value}>{new Date(project.startDate).toLocaleDateString()}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>End Date</span>
              <span className={styles.value}>{new Date(project.endDate).toLocaleDateString()}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Status</span>
              <span className={styles.value}>{project.status}</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <DollarSign size={18} className={styles.icon} />
            <h3>Financials</h3>
          </div>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Budget</span>
              <span className={styles.value}>₹{project.budget?.toLocaleString()}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Spent</span>
              <span className={styles.value}>₹{project.spent?.toLocaleString()}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Remaining</span>
              <span className={styles.value}>₹{(project.budget - project.spent)?.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <Users size={18} className={styles.icon} />
            <h3>Key Personnel</h3>
          </div>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Project Manager</span>
              <span className={styles.value}>{project.manager}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Site Engineer</span>
              <span className={styles.value}>{project.engineer}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
