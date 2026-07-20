import React from "react";
import styles from "./SiteVisitsList.module.scss";

const MOCK_VISITS = [
  {
    id: 1,
    visitNo: "SV-001",
    date: "18 Jul",
    time: "10:00 AM",
    engineer: "Rahul Verma",
    status: "Completed",
  },
];

const SiteVisitsList = () => {
  return (
    <div className={styles.card}>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Visit No</th>
              <th>Date</th>
              <th>Time</th>
              <th>Engineer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_VISITS.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 500 }}>{item.visitNo}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.engineer}</td>
                <td>
                  <span
                    className={`${styles.badge} ${
                      item.status === "Completed" ? styles.completed : styles.scheduled
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

export default SiteVisitsList;
