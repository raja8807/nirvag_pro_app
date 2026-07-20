import React from "react";
import styles from "./FollowUpsList.module.scss";

const MOCK_FOLLOW_UPS = [
  {
    id: 1,
    date: "20 Jul",
    type: "Phone Call",
    assignedTo: "Rahul",
    status: "Completed",
  },
  {
    id: 2,
    date: "23 Jul",
    type: "Meeting",
    assignedTo: "Rahul",
    status: "Upcoming",
  },
];

const FollowUpsList = () => {
  return (
    <div className={styles.card}>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Assigned To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_FOLLOW_UPS.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td>{item.assignedTo}</td>
                <td>
                  <span
                    className={`${styles.badge} ${
                      item.status === "Completed" ? styles.completed : styles.upcoming
                    }`}
                  >
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

export default FollowUpsList;
