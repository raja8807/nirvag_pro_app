import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
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
  const columns = useMemo(
    () => [
      { headerName: "Date", field: "date" },
      { headerName: "Type", field: "type" },
      { headerName: "Assigned To", field: "assignedTo" },
      {
        headerName: "Status",
        field: "status",
      }
    ],
    []
  );

  return (
    <DataTable
      title="Follow-ups"
      columns={columns}
      rows={MOCK_FOLLOW_UPS}
      dropdownFieldName="status"
    />
  );
};

export default FollowUpsList;
