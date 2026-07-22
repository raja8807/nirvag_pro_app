"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/ui/DataTable/DataTable";
import { LeadContext } from "@/context/LeadContext";

import styles from "./Leads.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { UserPlus } from "lucide-react";
import PageHead from "@/components/ui/PageHead/PageHead";
import PageLayout from "@/components/ui/PageLayout/PageLayout";

import { Eye, RefreshCw } from "lucide-react";
export default function LeadsScreen() {
  const router = useRouter();
  const { leads } = useContext(LeadContext);

  const columns = [
    {
      headerName: "Lead Name",
      valueGetter: (params) =>
        `${params.data.firstName || ""} ${params.data.lastName || ""}`.trim(),
      minWidth: 200,
    },
    {
      headerName: "Company",
      field: "companyName",
      minWidth: 150,
    },
    {
      headerName: "Status",
      field: "leadStatus",
      minWidth: 120,
    },
    {
      headerName: "Value",
      field: "budget",
      minWidth: 120,
    },
    {
      headerName: "Assigned To",
      field: "assignedSalesExecutive",
      minWidth: 150,
    },
    {
      headerName: "Next Action",
      field: "additionalInformation",
      minWidth: 200,
    },
    {
      headerName: "Source",
      field: "leadSource",
      minWidth: 120,
    },
  ];

  const tableActions = React.useMemo(() => [
    { name: "View Profile", icon: <Eye size={16} />, onClick: (row) => router.push(`/crm/leads/${row.id}`) },
    { name: "Convert to Project", icon: <RefreshCw size={16} />, onClick: (row) => alert(`Converting ${row.firstName || row.name} to a project!`) }
  ], [router]);

  return (
    <div className={styles.container}>
      <PageHead
        title={"Leads"}
        right={
          <CustomButton rightIcon={<UserPlus />} href={"/crm/leads/create"}>
            New Lead
          </CustomButton>
        }
      />
      <PageLayout>
        <DataTable
          rows={leads}
          columns={columns}
          pageSize={10}
          searchable
          selectable
          dropdownFieldName="leadStatus"
          actions={tableActions}
          onRowClicked={(e) => router.push(`/crm/leads/${e.data.id}`)}
        />
      </PageLayout>
    </div>
  );
}
