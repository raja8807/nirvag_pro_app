"use client";

import React from "react";
import styles from "./ActivityTimeline.module.scss";
import { CheckCircle2, FileEdit, PlusCircle, AlertCircle } from "lucide-react";

export default function ActivityTimeline() {
  const events = [
    { 
      id: 1, 
      text: <><strong>Rahul</strong> added a new lead <strong>Skyline Builders</strong></>,
      time: "10 mins ago",
      icon: <PlusCircle size={14} />,
      type: "primary"
    },
    { 
      id: 2, 
      text: <><strong>Project Alpha</strong> status updated to <strong>In Progress</strong></>,
      time: "2 hours ago",
      icon: <CheckCircle2 size={14} />,
      type: "success"
    },
    { 
      id: 3, 
      text: <>Invoice <strong>#INV-2026-004</strong> generated for <strong>Nexus Corp</strong></>,
      time: "4 hours ago",
      icon: <FileEdit size={14} />,
      type: "primary"
    },
    { 
      id: 4, 
      text: <>Low stock alert for <strong>Cement 53 Grade</strong></>,
      time: "Yesterday",
      icon: <AlertCircle size={14} />,
      type: "warning"
    },
    { 
      id: 5, 
      text: <>New worker <strong>Ramesh Kumar</strong> on-boarded</>,
      time: "Yesterday",
      icon: <PlusCircle size={14} />,
      type: "success"
    }
  ];

  return (
    <div className={styles.timeline}>
      {events.map((event) => (
        <div key={event.id} className={styles.event}>
          <div className={`${styles.iconWrapper} ${styles[event.type]}`}>
            {event.icon}
          </div>
          <div className={styles.content}>
            <p>{event.text}</p>
            <span className={styles.time}>{event.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
