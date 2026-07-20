import React from "react";
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
  return (
    <div className={styles.card}>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Assigned To</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_TASKS.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 500 }}>{item.name}</td>
                <td>{item.assignedTo}</td>
                <td>{item.priority}</td>
                <td>{item.dueDate}</td>
                <td>
                  <span className={`${styles.badge} ${getStatusClass(item.status)}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksList;
