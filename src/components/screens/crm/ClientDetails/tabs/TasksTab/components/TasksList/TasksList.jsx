import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import styles from "./TasksList.module.scss";

const MOCK_TASKS = [
  {
    id: 1,
    name: "Prepare Estimate",
    assignedTo: "Rahul Verma",
    priority: "High",
    dueDate: "22 Jul 2026",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Call Client",
    assignedTo: "Sarah Jenkins",
    priority: "Normal",
    dueDate: "19 Jul 2026",
    status: "Completed",
  },
];

const getStatusClass = (status) => {
  if (status === "Completed") return styles.completed;
  if (status === "In Progress") return styles.inProgress;
  if (status === "Overdue") return styles.overdue;
  return styles.pending;
};

const TasksList = () => {
  const columns = useMemo(
    () => [
      { headerName: "Task Name", field: "name", flex: 1.5 },
      { headerName: "Assigned To", field: "assignedTo" },
      { headerName: "Priority", field: "priority" },
      { headerName: "Due Date", field: "dueDate" },
      {
        headerName: "Status",
        field: "status",
        
      },
    ],
    []
  );

  return (
    <DataTable
      title="Tasks"
      columns={columns}
      rows={MOCK_TASKS}
      dropdownFieldName="status"
    />
  );
};

export default TasksList;
