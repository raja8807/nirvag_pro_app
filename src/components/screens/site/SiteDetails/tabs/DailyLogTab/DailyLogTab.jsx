import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./DailyLogTab.module.scss";

export default function DailyLogTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Date", field: "date", flex: 1 },
    { headerName: "Weather", field: "weather", flex: 0.8 },
    { headerName: "Achievements", field: "achievements", flex: 2 },
    { headerName: "Submitted By", field: "submittedBy", flex: 1 }
  ], []);

  const data = MOCK_DB.dailyLogs.filter(log => log.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Daily Logs"
        columns={columns}
        rows={data}
        dropdownFieldName="weather"
      />
    </div>
  );
}
