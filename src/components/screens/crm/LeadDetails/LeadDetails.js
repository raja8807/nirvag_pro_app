"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SAMPLE_LEADS } from "@/constants/crmConstants";

import styles from "./LeadDetails.module.scss";

export default function LeadDetails({ id }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Profile");
  
  // Find lead by ID (or fallback to first lead for demo purposes)
  const lead = SAMPLE_LEADS.find(l => l.id === id) || SAMPLE_LEADS[0];

  const TABS = ["Profile", "Activity Timeline", "Quotations & Files"];

  if (!lead) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backBtn} onClick={() => router.back()}>
            ← Back
          </button>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>{lead.name}</h1>
            <span className={styles.badge}>{lead.status}</span>
          </div>
          <p className={styles.subtitle}>{lead.company} • {lead.value}</p>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.primaryBtn} onClick={() => alert("Converted to Project!")}>
            Convert to Project
          </button>
        </div>
      </div>

      <div className={styles.tabsBar}>
        {TABS.map(tab => (
          <button 
            key={tab}
            className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {activeTab === "Profile" && (
          <div className={styles.card}>
            <h3>Contact Information</h3>
            <div className={styles.grid}>
              <div className={styles.gridItem}>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>{lead.phone}</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>{lead.email}</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>Source</span>
                <span className={styles.value}>{lead.source}</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>Assigned Staff</span>
                <span className={styles.value}>{lead.assignedTo}</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>Next Action Date</span>
                <span className={styles.value}>{lead.nextActionDate}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Activity Timeline" && (
          <div className={styles.card}>
            <h3>Recent Activities</h3>
            <ul className={styles.timeline}>
              <li>
                <div className={styles.timelineDate}>Today</div>
                <div className={styles.timelineContent}>Called client to discuss requirements. {lead.nextAction}.</div>
              </li>
              <li>
                <div className={styles.timelineDate}>Yesterday</div>
                <div className={styles.timelineContent}>Lead captured from {lead.source}. Assigned to {lead.assignedTo}.</div>
              </li>
            </ul>
            <button className={styles.secondaryBtn}>+ Log Meeting</button>
          </div>
        )}

        {activeTab === "Quotations & Files" && (
          <div className={styles.card}>
            <h3>Uploaded Documents</h3>
            <p className={styles.emptyText}>No quotations uploaded yet.</p>
            <button className={styles.secondaryBtn}>Upload Quotation</button>
          </div>
        )}
      </div>
    </div>
  );
}
