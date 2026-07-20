"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SAMPLE_CLIENTS } from "@/constants/crmConstants";

import styles from "./ClientDetails.module.scss";

export default function ClientDetails({ id }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Profile");
  
  // Find client by ID (or fallback to first client for demo purposes)
  const client = SAMPLE_CLIENTS.find(c => c.id === id) || SAMPLE_CLIENTS[0];

  const TABS = ["Profile", "Projects", "Financials", "Documents"];

  if (!client) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backBtn} onClick={() => router.back()}>
            ← Back
          </button>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>{client.name}</h1>
          </div>
          <p className={styles.subtitle}>Client since 2024</p>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.secondaryBtn}>Edit Client</button>
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
            <h3>Company Details</h3>
            <div className={styles.grid}>
              <div className={styles.gridItem}>
                <span className={styles.label}>Contact Person</span>
                <span className={styles.value}>{client.contactPerson}</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>{client.phone}</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>{client.email}</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>GST Number</span>
                <span className={styles.value}>{client.gst}</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.label}>PAN Number</span>
                <span className={styles.value}>{client.pan}</span>
              </div>
              <div className={styles.gridItemFull}>
                <span className={styles.label}>Address</span>
                <span className={styles.value}>{client.address}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Projects" && (
          <div className={styles.card}>
            <h3>Project History</h3>
            <p className={styles.emptyText}>No project history available.</p>
          </div>
        )}

        {activeTab === "Financials" && (
          <div className={styles.card}>
            <h3>Invoices & Receipts</h3>
            <div className={styles.financialSummary}>
              <div className={styles.finBox}>
                <span className={styles.finLabel}>Pending Dues</span>
                <span className={styles.finValueDanger}>{client.pendingDues}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Documents" && (
          <div className={styles.card}>
            <h3>Agreements & IDs</h3>
            <p className={styles.emptyText}>No documents uploaded yet.</p>
            <button className={styles.secondaryBtn}>Upload Document</button>
          </div>
        )}
      </div>
    </div>
  );
}
