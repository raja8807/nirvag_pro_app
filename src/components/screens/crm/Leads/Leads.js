"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/ui/DataTable/DataTable";
import { SAMPLE_LEADS } from "@/constants/crmConstants";

import styles from "./Leads.module.scss";

const ActionCellRenderer = (params) => {
  const router = useRouter();
  
  return (
    <div className={styles.actionButtons}>
      <button 
        className={styles.viewBtn} 
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/crm/leads/${params.data.id}`);
        }}
      >
        View
      </button>
      <button 
        className={styles.convertBtn}
        onClick={(e) => {
          e.stopPropagation();
          alert(`Converting ${params.data.name} to a project!`);
        }}
      >
        Convert
      </button>
    </div>
  );
};

export default function Leads() {
  const router = useRouter();

  const columns = [
    {
      headerName: "Lead Name",
      field: "name",
      minWidth: 200,
    },
    {
      headerName: "Company",
      field: "company",
      minWidth: 150,
    },
    {
      headerName: "Status",
      field: "status",
      minWidth: 120,
    },
    {
      headerName: "Value",
      field: "value",
      minWidth: 120,
    },
    {
      headerName: "Assigned To",
      field: "assignedTo",
      minWidth: 150,
    },
    {
      headerName: "Next Action",
      field: "nextAction",
      minWidth: 200,
    },
    {
      headerName: "Source",
      field: "source",
      minWidth: 120,
    },
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: ActionCellRenderer,
      minWidth: 200,
      sortable: false,
      filter: false,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Leads Pipeline</h1>
        <button className={styles.newLeadBtn}>+ New Lead</button>
      </div>
      <DataTable
        rows={SAMPLE_LEADS}
        columns={columns}
        pageSize={10}
        searchable
        selectable
        onRowClicked={(e) => router.push(`/crm/leads/${e.data.id}`)}
      />
    </div>
  );
}
