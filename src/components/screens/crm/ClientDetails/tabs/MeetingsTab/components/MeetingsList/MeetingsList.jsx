import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
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
  const columns = useMemo(
    () => [
      { headerName: "Title", field: "title", flex: 1.5 },
      { headerName: "Type", field: "type" },
      { headerName: "Date", field: "date" },
      { headerName: "Time", field: "time" },
      {
        headerName: "Status",
        field: "status",
     
      },
    ],
    []
  );

  return (
    <DataTable
      title="Meetings"
      columns={columns}
      rows={MOCK_MEETINGS}
      dropdownFieldName="status"
    />
  );
};

export default MeetingsList;
