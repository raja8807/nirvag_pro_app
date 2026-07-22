"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import styles from "./DashboardTables.module.scss";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import { LeadContext } from "@/context/LeadContext";
import { useContext } from "react";

export default function DashboardTables() {
  const router = useRouter();
  const { leads } = useContext(LeadContext);

  // Columns for Recent Leads
  const leadsColumns = useMemo(() => [
    { 
      headerName: "Lead Name", 
      valueGetter: (params) => `${params.data.firstName || ""} ${params.data.lastName || ""}`.trim(),
      flex: 1 
    },
    { headerName: "Status", field: "leadStatus", width: 120 },
    { headerName: "Value", field: "budget", width: 120, cellRenderer: p => `₹${p.value?.toLocaleString()}` }
  ], []);

  // Columns for Active Projects
  const projectColumns = useMemo(() => [
    { headerName: "Project", field: "name", flex: 1 },
    { 
      headerName: "Progress", 
      field: "progress", 
      width: 150,
      cellRenderer: (p) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '100%' }}>
          <div style={{ flex: 1, backgroundColor: '#e2e8f0', height: '6px', borderRadius: '3px' }}>
            <div style={{ width: `${p.value}%`, backgroundColor: '#0b57d0', height: '100%', borderRadius: '3px' }} />
          </div>
          <span style={{ fontSize: '12px' }}>{p.value}%</span>
        </div>
      )
    },
    { headerName: "Status", field: "status", width: 130 }
  ], []);

  // Filter Active Projects
  const activeProjects = MOCK_DB.projects.filter(p => p.status === "In Progress" || p.status === "Planning");

  return (
    <div className={styles.tablesGrid}>
      
      {/* Recent Leads */}
      <div className={styles.tableCard}>
        <div className={styles.header}>
          <h3>Recent Leads</h3>
          <button onClick={() => router.push('/crm/leads')}>View All</button>
        </div>
        <div className={styles.tableWrapper}>
          <DataTable 
            rows={(leads || []).slice(0, 5)} 
            columns={leadsColumns} 
            pageSize={5}
            domLayout="autoHeight"
            onRowClicked={(e) => router.push(`/crm/leads/${e.data.id}`)}
          />
        </div>
      </div>

      {/* Active Projects */}
      <div className={styles.tableCard}>
        <div className={styles.header}>
          <h3>Active Projects</h3>
          <button onClick={() => router.push('/projects/projects')}>View All</button>
        </div>
        <div className={styles.tableWrapper}>
          <DataTable 
            rows={activeProjects.slice(0, 5)} 
            columns={projectColumns} 
            pageSize={5}
            domLayout="autoHeight"
            onRowClicked={(e) => router.push(`/projects/projects/${e.data.id}`)}
          />
        </div>
      </div>

    </div>
  );
}
