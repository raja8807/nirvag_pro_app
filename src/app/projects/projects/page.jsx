"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";

import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Plus } from "lucide-react";
import PageHead from "@/components/ui/PageHead/PageHead";
import PageLayout from "@/components/ui/PageLayout/PageLayout";

import { FolderOpen } from "lucide-react";

export default function ProjectsPage() {
  const router = useRouter();

  const columns = [
    { headerName: "Project ID", field: "id", minWidth: 120 },
    { headerName: "Name", field: "name", minWidth: 220 },
    { headerName: "Client", field: "clientName", minWidth: 150 },
    { headerName: "Manager", field: "manager", minWidth: 150 },
    { headerName: "Status", field: "status", minWidth: 120 },
    { headerName: "Budget", field: "budget", minWidth: 150, cellRenderer: p => `₹${p.value?.toLocaleString()}` },
    { headerName: "Progress", field: "progress", minWidth: 100, cellRenderer: p => `${p.value}%` },
  ];

  const tableActions = React.useMemo(() => [
    { name: "View Project", icon: <FolderOpen size={16} />, onClick: (row) => router.push(`/projects/projects/${row.id}`) }
  ], [router]);

  return (
    <>
      <PageHead
        title={"Project Directory"}
        right={<CustomButton onClick={() => router.push('/projects/projects/create')} rightIcon={<Plus size={16} />}>New Project</CustomButton>}
      />

      <PageLayout>
        <DataTable
          rows={MOCK_DB.projects}
          columns={columns}
          pageSize={10}
          searchable
          selectable
          dropdownFieldName="status"
          actions={tableActions}
          onRowClicked={(e) => router.push(`/projects/projects/${e.data.id}`)}
        />
      </PageLayout>
    </>
  );
}
