import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./VisitorsRegisterTab.module.scss";

export default function VisitorsRegisterTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Name", field: "name", flex: 1 },
    { headerName: "Company", field: "company", flex: 1.2 },
    { headerName: "Purpose", field: "purpose", flex: 1.5 },
    { headerName: "Check-In", field: "checkIn" },
    { headerName: "Check-Out", field: "checkOut" }
  ], []);

  const data = MOCK_DB.visitors.filter(v => v.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Site Visitors Register"
        columns={columns}
        rows={data}
      />
    </div>
  );
}
