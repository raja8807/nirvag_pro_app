import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./TeamTab.module.scss";

export default function TeamTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Name", field: "name", flex: 1 },
    { headerName: "Role", field: "role" },
    { headerName: "Phone", field: "phone" }
  ], []);

  const data = MOCK_DB.team.filter(t => t.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Assigned Team"
        columns={columns}
        rows={data}
        dropdownFieldName="role"
      />
    </div>
  );
}
