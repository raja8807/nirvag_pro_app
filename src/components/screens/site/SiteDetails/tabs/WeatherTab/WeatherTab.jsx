import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import styles from "./WeatherTab.module.scss";

export default function WeatherTab() {
  const columns = useMemo(() => [
    { headerName: "Date", field: "date" },
    { headerName: "Temperature", field: "temp" },
    { headerName: "Condition", field: "condition" },
    { headerName: "Impact on Work", field: "impact", flex: 1.5 }
  ], []);

  // Mock static data for weather
  const data = [
    { date: "22 Jul 2026", temp: "32°C", condition: "Sunny", impact: "None" },
    { date: "21 Jul 2026", temp: "28°C", condition: "Rainy", impact: "Concreting delayed by 3 hours" },
    { date: "20 Jul 2026", temp: "34°C", condition: "Extreme Heat", impact: "Extra breaks given to labour" }
  ];

  return (
    <div className={styles.container}>
      <DataTable 
        title="Site Weather Logs"
        columns={columns}
        rows={data}
        dropdownFieldName="condition"
      />
    </div>
  );
}
