"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/ui/DataTable/DataTable";
import { SAMPLE_CLIENTS } from "@/constants/crmConstants";

import styles from "./Clients.module.scss";

const ActionCellRenderer = (params) => {
  const router = useRouter();
  
  return (
    <div className={styles.actionButtons}>
      <button 
        className={styles.viewBtn} 
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/crm/clients/${params.data.id}`);
        }}
      >
        View Profile
      </button>
    </div>
  );
};

export default function Clients() {
  const router = useRouter();

  const columns = [
    {
      headerName: "Client Name",
      field: "name",
      minWidth: 200,
    },
    {
      headerName: "Contact Person",
      field: "contactPerson",
      minWidth: 150,
    },
    {
      headerName: "Phone",
      field: "phone",
      minWidth: 150,
    },
    {
      headerName: "Email",
      field: "email",
      minWidth: 200,
    },
    {
      headerName: "GST Number",
      field: "gst",
      minWidth: 150,
    },
    {
      headerName: "Active Projects",
      field: "activeProjects",
      minWidth: 150,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Pending Dues",
      field: "pendingDues",
      minWidth: 150,
    },
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: ActionCellRenderer,
      minWidth: 150,
      sortable: false,
      filter: false,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Client Directory</h1>
        <button className={styles.newClientBtn}>+ Add Client</button>
      </div>
      <DataTable
        rows={SAMPLE_CLIENTS}
        columns={columns}
        pageSize={10}
        searchable
        selectable
        onRowClicked={(e) => router.push(`/crm/clients/${e.data.id}`)}
      />
    </div>
  );
}
