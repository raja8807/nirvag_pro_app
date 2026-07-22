import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
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
  const columns = useMemo(
    () => [
      { headerName: "Visit No", field: "visitNo" },
      { headerName: "Date", field: "date" },
      { headerName: "Time", field: "time" },
      { headerName: "Engineer", field: "engineer" },
      {
        headerName: "Status",
        field: "status",
        
      },
    ],
    []
  );

  return (
    <DataTable
      title="Site Visits"
      columns={columns}
      rows={MOCK_VISITS}
      dropdownFieldName="status"
    />
  );
};

export default SiteVisitsList;
