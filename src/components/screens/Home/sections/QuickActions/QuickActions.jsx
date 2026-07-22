"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./QuickActions.module.scss";
import { PlusCircle, FileText, Users, HardHat, FileCheck2, Building2, UserPlus, FileSpreadsheet, FolderOpen } from "lucide-react";

export default function QuickActions() {
  const router = useRouter();

  const actions = [
    { label: "New Lead", icon: <UserPlus size={16} />, path: "/crm/leads/create" },
    { label: "New Client", icon: <Building2 size={16} />, path: "/crm/clients/create" },
    { label: "New Project", icon: <FolderOpen size={16} />, path: "/projects/projects/create" },
    { label: "Add Worker", icon: <HardHat size={16} />, path: "/workforce/workers/create" },
    { label: "Mark Attendance", icon: <FileCheck2 size={16} />, path: "/workforce/attendance" },
    { label: "Create PO", icon: <FileText size={16} />, path: "/inventory/purchase-orders/create" },
    { label: "Generate Invoice", icon: <FileSpreadsheet size={16} />, path: "/finance/invoices/create" },
  ];

  return (
    <div className={styles.quickActions}>
      <h3>Quick Actions</h3>
      <div className={styles.actionGrid}>
        {actions.map((action, index) => (
          <button 
            key={index} 
            className={styles.actionBtn}
            onClick={() => {
              if (action.path) router.push(action.path);
            }}
          >
            {action.icon}
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}


