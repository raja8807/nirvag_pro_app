import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./WorkProgressTab.module.scss";

export default function WorkProgressTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Activity", field: "activity", flex: 1.5 },
    { headerName: "Planned Qty", field: "plannedQty" },
    { headerName: "Total Completed", field: "totalCompleted" },
    { headerName: "Remaining", field: "remaining" },
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

  const data = MOCK_DB.workProgress.filter(w => w.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Work Progress Tracking"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
      />
    </div>
  );
}
