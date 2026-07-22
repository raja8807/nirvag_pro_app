"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";

import styles from "./WorkersList.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { HardHat } from "lucide-react";

export default function WorkersList() {
  const router = useRouter();



  const columns = useMemo(() => [
    { headerName: "Worker Code", field: "code", minWidth: 120 },
    { headerName: "Name", field: "name", minWidth: 200, flex: 1 },
    { headerName: "Trade", field: "trade", minWidth: 150 },
    { headerName: "Skill Level", field: "skillLevel", minWidth: 120 },
    { headerName: "Daily Wage", field: "dailyWage", minWidth: 120, cellRenderer: p => `₹${p.value}` },
    { headerName: "Current Project", field: "currentProjectName", minWidth: 200 },
    { headerName: "Contractor", field: "contractorName", minWidth: 150 },
    { headerName: "Status", field: "status", minWidth: 120 },
  ], []);

  const tableActions = useMemo(() => [
    {
      name: "View Profile",
      icon: <HardHat size={16} />,
      onClick: (row) => router.push(`/workforce/workers/${row.id}`)
    }
  ], [router]);

  return (
    <>
      <PageHead 
        title="Daily Wage Workers Directory" 
        right={
          <CustomButton 
            leftIcon={<HardHat size={16} />} 
            onClick={() => router.push('/workforce/workers/create')}
          >
            Add Worker
          </CustomButton>
        }
      />
      <PageLayout>
        <DataTable
          rows={MOCK_DB.workers}
          columns={columns}
          pageSize={15}
          searchable
          selectable
          dropdownFieldName="status"
          actions={tableActions}
          onRowClicked={(e) => router.push(`/workforce/workers/${e.data.id}`)}
        />
      </PageLayout>
    </>
  );
}
