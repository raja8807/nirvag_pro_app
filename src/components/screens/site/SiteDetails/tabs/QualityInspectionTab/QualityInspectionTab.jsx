import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./QualityInspectionTab.module.scss";

export default function QualityInspectionTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Date", field: "date" },
    { headerName: "Area/Location", field: "area", flex: 1.5 },
    { headerName: "Inspector", field: "inspector" },
    { headerName: "Result", field: "status" }
  ], []);

  const data = MOCK_DB.qualityLogs.filter(q => q.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Quality Inspections"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
      />
    </div>
  );
}
