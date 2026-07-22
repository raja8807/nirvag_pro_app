import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./MachineryTab.module.scss";

export default function MachineryTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Machine", field: "machine", flex: 1.5 },
    { headerName: "Operator", field: "operator", flex: 1.2 },
    { headerName: "Hours Used", field: "hoursUsed" },
    { headerName: "Fuel (Ltr)", field: "fuelUsed" },
    { headerName: "Condition", field: "condition", flex: 1.2 }
  ], []);

  const data = MOCK_DB.machineryLogs.filter(m => m.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Machinery & Equipment Log"
        columns={columns}
        rows={data}
        dropdownFieldName="condition"
      />
    </div>
  );
}
