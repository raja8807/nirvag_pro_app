"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";

import styles from "./SitesList.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import PageLayout from "@/components/ui/PageLayout/PageLayout";

import { LayoutDashboard } from "lucide-react";

export default function SitesList() {
  const router = useRouter();

  const columns = [
    {
      headerName: "Project / Site",
      field: "name",
      minWidth: 250,
      flex: 1
    },
    {
      headerName: "Client",
      field: "clientName",
      minWidth: 150,
    },
    {
      headerName: "Site Engineer",
      field: "engineer",
      minWidth: 150,
    },
    {
      headerName: "Project Manager",
      field: "manager",
      minWidth: 150,
    },
    {
      headerName: "Progress",
      field: "progress",
      minWidth: 150,
      cellRenderer: (p) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '100%' }}>
          <div style={{ flex: 1, backgroundColor: '#e2e8f0', height: '8px', borderRadius: '4px' }}>
            <div style={{ width: `${p.value}%`, backgroundColor: '#3b82f6', height: '100%', borderRadius: '4px' }} />
          </div>
          <span style={{ fontSize: '12px' }}>{p.value}%</span>
        </div>
      )
    },
    {
      headerName: "Status",
      field: "status",
      minWidth: 150,
    },
  ];

  const tableActions = React.useMemo(() => [
    { name: "Manage Site", icon: <LayoutDashboard size={16} />, onClick: (row) => router.push(`/projects/sites/${row.id}`) }
  ], [router]);

  // We only show sites (projects) that are active
  const activeSites = MOCK_DB.projects.filter(p => p.status === "In Progress" || p.status === "Planning");

  return (
    <>
      <PageHead title="Active Sites Directory" />
      <PageLayout>
        <DataTable
          rows={activeSites}
          columns={columns}
          pageSize={10}
          searchable
          selectable
          dropdownFieldName="status"
          actions={tableActions}
          onRowClicked={(e) => router.push(`/projects/sites/${e.data.id}`)}
        />
      </PageLayout>
    </>
  );
}
