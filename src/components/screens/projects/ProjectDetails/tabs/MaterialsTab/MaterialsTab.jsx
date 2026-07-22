import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./MaterialsTab.module.scss";

export default function MaterialsTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Material", field: "name", flex: 1.5 },
    { headerName: "Req. Qty", field: "reqQty" },
    { headerName: "Issued", field: "issuedQty" },
    { headerName: "Consumed", field: "consumedQty" },
    { 
      headerName: "Balance", 
      field: "balance",
      valueGetter: p => p.data.issuedQty - p.data.consumedQty
    },
    { headerName: "Supplier", field: "supplier" }
  ], []);

  const data = MOCK_DB.materials.filter(m => m.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Project Materials"
        columns={columns}
        rows={data}
      />
    </div>
  );
}
