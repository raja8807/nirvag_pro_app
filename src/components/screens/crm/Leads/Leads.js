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
    // {
    //   headerName: "Actions",
    //   field: "actions",
    //   cellRenderer: ActionCellRenderer,
    //   minWidth: 200,
    //   sortable: false,
    //   filter: false,
    // },
  ];

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
          onRowClicked={(e) => router.push(`/crm/leads/${e.data.id}`)}
        />
      </PageLayout>
    </div>
  );
}
