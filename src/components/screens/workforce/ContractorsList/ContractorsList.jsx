"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";

import styles from "./ContractorsList.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Truck } from "lucide-react";

export default function ContractorsList() {
  const router = useRouter();



  const columns = useMemo(() => [
    { headerName: "Contractor Name", field: "name", minWidth: 250, flex: 1 },
    { headerName: "Contact Person", field: "contactPerson", minWidth: 200 },
    { headerName: "Phone", field: "phone", minWidth: 150 },
    { headerName: "GST Number", field: "gst", minWidth: 150 },
    { headerName: "Workers Supplied", field: "workersSupplied", minWidth: 150, cellRenderer: p => <strong>{p.value}</strong> },
    { headerName: "Status", field: "status", minWidth: 120 },
  ], []);

  const tableActions = useMemo(() => [
    {
      name: "View Profile",
      icon: <Truck size={16} />,
      onClick: (row) => router.push(`/workforce/contractors/${row.id}`)
    }
  ], [router]);

  return (
    <>
      <PageHead 
        title="Labour Contractors Directory" 
        right={
          <CustomButton 
            leftIcon={<Truck size={16} />} 
            onClick={() => router.push('/workforce/contractors/create')}
          >
            Add Contractor
          </CustomButton>
        }
      />
      <PageLayout>
        <DataTable
          rows={MOCK_DB.contractors}
          columns={columns}
          pageSize={15}
          searchable
          selectable
          dropdownFieldName="status"
          actions={tableActions}
        />
      </PageLayout>
    </>
  );
}
