import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import styles from "./ActivityLogTab.module.scss";

const MOCK_LOGS = [
  { id: 1, date: "20 Jul 2026, 14:30", user: "Rahul", action: "Updated Budget", details: "₹45L → ₹48L" },
  { id: 2, date: "20 Jul 2026, 09:15", user: "Admin", action: "Assigned Lead", details: "Rahul Verma" },
  { id: 3, date: "19 Jul 2026, 16:45", user: "Sarah", action: "Uploaded File", details: "plan_v1.pdf" },
  { id: 4, date: "18 Jul 2026, 11:00", user: "System", action: "Status Changed", details: "New → Contacted" },
  { id: 5, date: "18 Jul 2026, 10:30", user: "Admin", action: "Created Lead", details: "System Import" },
];

const ActivityLogTab = () => {
  const columns = useMemo(
    () => [
      { headerName: "Date & Time", field: "date", flex: 1.5 },
      { headerName: "User", field: "user" },
      {
        headerName: "Action",
        field: "action",
        cellRenderer: (params) => {
          if (!params.value) return null;
          return <span className={styles.actionText}>{params.value}</span>;
        },
      },
      {
        headerName: "Details",
        field: "details",
        flex: 2,
        cellRenderer: (params) => {
          if (!params.value) return null;
          return (
            <span className={styles.detailsText}>
              {params.value.includes("→") ? (
                <>
                  <span>{params.value.split("→")[0].trim()}</span> &rarr;{" "}
                  <span>{params.value.split("→")[1].trim()}</span>
                </>
              ) : (
                params.value
              )}
            </span>
          );
        },
      },
    ],
    []
  );

  return (
    <div>
      <p style={{ margin: "0 0 16px", fontSize: "0.875rem", color: "#6b7280" }}>
        This is a complete, immutable record of all actions taken on this lead.
      </p>
      
      <DataTable
        title="System Audit Trail"
        columns={columns}
        rows={MOCK_LOGS}
        dropdownFieldName="action"
      />
    </div>
  );
};

export default ActivityLogTab;
