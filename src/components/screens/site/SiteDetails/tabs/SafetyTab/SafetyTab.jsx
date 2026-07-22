import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./SafetyTab.module.scss";

export default function SafetyTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Date", field: "date" },
    { headerName: "Inspected By", field: "inspector" },
    { headerName: "Incidents Found", field: "incidents" },
    { headerName: "Result", field: "status", flex: 1.5 }
  ], []);

  const data = MOCK_DB.safetyLogs.filter(s => s.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Safety & Compliance Logs"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
      />
    </div>
  );
}
