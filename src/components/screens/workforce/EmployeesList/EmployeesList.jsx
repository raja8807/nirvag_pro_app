"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";

import styles from "./EmployeesList.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { UserPlus, Users } from "lucide-react";

export default function EmployeesList() {
  const router = useRouter();



  const columns = useMemo(() => [
    { headerName: "Emp Code", field: "code", minWidth: 120 },
    { headerName: "Name", field: "name", minWidth: 200, flex: 1 },
    { headerName: "Designation", field: "designation", minWidth: 150 },
    { headerName: "Role", field: "role", minWidth: 120 },
    { headerName: "Email", field: "email", minWidth: 200 },
    { headerName: "Status", field: "status", minWidth: 120 },
  ], []);

  const tableActions = useMemo(() => [
    {
      name: "View Profile",
      icon: <Users size={16} />,
      onClick: (row) => router.push(`/workforce/employees/${row.id}`)
    }
  ], [router]);

  return (
    <>
      <PageHead 
        title="System Employees Directory" 
        right={
          <CustomButton 
            leftIcon={<UserPlus size={16} />} 
            onClick={() => router.push('/workforce/employees/create')}
          >
            Add Employee
          </CustomButton>
        }
      />
      <PageLayout>
        <DataTable
          rows={MOCK_DB.employees}
          columns={columns}
          pageSize={15}
          searchable
          selectable
          dropdownFieldName="status"
          actions={tableActions}
          onRowClicked={(e) => router.push(`/workforce/employees/${e.data.id}`)}
        />
      </PageLayout>
    </>
  );
}
