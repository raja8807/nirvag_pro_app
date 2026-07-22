"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";

import styles from "./Clients.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { UserPlus } from "lucide-react";
import PageHead from "@/components/ui/PageHead/PageHead";
import PageLayout from "@/components/ui/PageLayout/PageLayout";

import { Eye } from "lucide-react";
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
  ];

  const tableActions = React.useMemo(() => [
    { name: "View Profile", icon: <Eye size={16} />, onClick: (row) => router.push(`/crm/clients/${row.id}`) }
  ], [router]);

  return (
    <>
      <PageHead
        title={"Client Directory"}
        right={<CustomButton onClick={() => router.push('/crm/clients/create')} rightIcon={<UserPlus />}>Create Client</CustomButton>}
      />

      <PageLayout>
        <DataTable
          rows={MOCK_DB.clients}
          columns={columns}
          pageSize={10}
          searchable
          selectable
          actions={tableActions}
          onRowClicked={(e) => router.push(`/crm/clients/${e.data.id}`)}
        />
      </PageLayout>
    </>
  );
}
