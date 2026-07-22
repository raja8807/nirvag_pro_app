import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./ProjectsTab.module.scss";

export default function ProjectsTab({ client }) {
  const columns = useMemo(() => [
    { headerName: "Project ID", field: "id", flex: 0.8 },
    { headerName: "Name", field: "name", flex: 1.5 },
    { headerName: "Type", field: "type" },
    { headerName: "Manager", field: "manager" },
    { 
      headerName: "Budget", 
      field: "budget",
      cellRenderer: (p) => `₹${Number(p.value).toLocaleString()}`
    },
    { headerName: "Status", field: "status" }
  ], []);

  const data = MOCK_DB.projects.filter(p => p.clientId === client?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Associated Projects"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
      />
    </div>
  );
}
