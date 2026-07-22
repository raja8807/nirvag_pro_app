import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import styles from "./IssuesTab.module.scss";

export default function IssuesTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Issue Title", field: "title", flex: 1.5 },
    { headerName: "Category", field: "category" },
    { headerName: "Priority", field: "priority" },
    { headerName: "Assigned To", field: "assignedTo" },
    { headerName: "Due Date", field: "dueDate" },
    { headerName: "Status", field: "status" }
  ], []);

  const data = [
    { title: "Material shortage for slab casting", category: "Material", priority: "High", assignedTo: "Purchase Dept", dueDate: "23 Jul 2026", status: "Pending" },
    { title: "Design approval delayed by client", category: "Approval", priority: "Medium", assignedTo: project?.manager || "John", dueDate: "25 Jul 2026", status: "In Progress" },
    { title: "Water logging at site", category: "Environment", priority: "Urgent", assignedTo: project?.engineer || "Ravi", dueDate: "21 Jul 2026", status: "Resolved" }
  ];

  return (
    <div className={styles.container}>
      <DataTable 
        title="Issues & Risks"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
      />
    </div>
  );
}
