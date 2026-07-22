import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import styles from "./SiteProgressTab.module.scss";

export default function SiteProgressTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Date", field: "date" },
    { headerName: "Work Completed", field: "work", flex: 1.5 },
    { headerName: "Issues/Delays", field: "issues" },
    { headerName: "Weather", field: "weather" },
    { headerName: "Reported By", field: "reportedBy" }
  ], []);

  // Using static mock data since we didn't add site logs to the massive generator to save space
  const data = [
    { date: "22 Jul 2026", work: "First floor slab casting completed", issues: "None", weather: "Sunny", reportedBy: project?.engineer || "Ravi" },
    { date: "21 Jul 2026", work: "Steel binding for slab", issues: "Delayed by 2 hours due to rain", weather: "Rainy", reportedBy: project?.engineer || "Ravi" }
  ];

  return (
    <div className={styles.container}>
      <DataTable 
        title="Daily Site Logs"
        columns={columns}
        rows={data}
      />
    </div>
  );
}
