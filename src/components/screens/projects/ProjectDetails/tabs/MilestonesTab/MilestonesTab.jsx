import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./MilestonesTab.module.scss";

export default function MilestonesTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Milestone", field: "name", flex: 1.5 },
    { headerName: "Assigned To", field: "assignedTo" },
    { 
      headerName: "Progress", 
      field: "progress",
      cellRenderer: p => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '100%' }}>
          <div style={{ flex: 1, backgroundColor: '#e2e8f0', height: '8px', borderRadius: '4px' }}>
            <div style={{ width: `${p.value}%`, backgroundColor: '#3b82f6', height: '100%', borderRadius: '4px' }} />
          </div>
          <span style={{ fontSize: '12px' }}>{p.value}%</span>
        </div>
      )
    },
    { headerName: "Status", field: "status" }
  ], []);

  const data = MOCK_DB.milestones.filter(m => m.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Project Milestones"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
      />
    </div>
  );
}
