import React from "react";
import styles from "./ActivityLogTab.module.scss";

const MOCK_LOGS = [
  { id: 1, date: "20 Jul 2026, 14:30", user: "Rahul", action: "Updated Budget", details: "₹45L → ₹48L" },
  { id: 2, date: "20 Jul 2026, 09:15", user: "Admin", action: "Assigned Lead", details: "Rahul Verma" },
  { id: 3, date: "19 Jul 2026, 16:45", user: "Sarah", action: "Uploaded File", details: "plan_v1.pdf" },
  { id: 4, date: "18 Jul 2026, 11:00", user: "System", action: "Status Changed", details: "New → Contacted" },
  { id: 5, date: "18 Jul 2026, 10:30", user: "Admin", action: "Created Lead", details: "System Import" },
];

const ActivityLogTab = () => {
  return (
    <div>
      <h3 style={{ margin: 0, fontSize: "1.125rem", color: "#3e475d" }}>System Audit Trail</h3>
      <p style={{ margin: "4px 0 0", fontSize: "0.875rem", color: "#6b7280" }}>
        This is a complete, immutable record of all actions taken on this lead.
      </p>
      
      <div className={styles.card}>
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>User</th>
                <th>Action</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_LOGS.map((log) => (
                <tr key={log.id}>
                  <td>{log.date}</td>
                  <td>{log.user}</td>
                  <td className={styles.actionText}>{log.action}</td>
                  <td className={styles.detailsText}>
                    {log.details.includes("→") ? (
                      <>
                        <span>{log.details.split("→")[0].trim()}</span> &rarr; <span>{log.details.split("→")[1].trim()}</span>
                      </>
                    ) : (
                      log.details
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogTab;
