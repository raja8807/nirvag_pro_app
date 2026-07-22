import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./LabourAttendanceTab.module.scss";

export default function LabourAttendanceTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Employee", field: "employee", flex: 1.2 },
    { headerName: "Contractor", field: "contractor", flex: 1.2 },
    { headerName: "Trade", field: "trade" },
    { headerName: "Working Hrs", field: "workingHours" },
    { headerName: "Status", field: "status" }
  ], []);

  const data = MOCK_DB.labourAttendance.filter(a => a.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Labour Attendance"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
      />
    </div>
  );
}
