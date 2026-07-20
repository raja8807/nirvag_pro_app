import React from "react";
import styles from "./MeetingsList.module.scss";

const MOCK_MEETINGS = [
  {
    id: 1,
    title: "Initial Discovery Call",
    type: "Online",
    date: "18 Jul",
    time: "4:00 PM",
    status: "Completed",
  },
  {
    id: 2,
    title: "Design Review",
    type: "Client Office",
    date: "24 Jul",
    time: "2:30 PM",
    status: "Scheduled",
  },
];

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case "completed":
      return styles.completed;
    case "scheduled":
      return styles.scheduled;
    case "cancelled":
      return styles.cancelled;
    case "rescheduled":
      return styles.rescheduled;
    default:
      return "";
  }
};

const MeetingsList = () => {
  return (
    <div className={styles.card}>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_MEETINGS.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 500 }}>{item.title}</td>
                <td>{item.type}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
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

export default MeetingsList;
