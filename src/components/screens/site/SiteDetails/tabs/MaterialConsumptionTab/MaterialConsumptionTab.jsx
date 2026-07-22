import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./MaterialConsumptionTab.module.scss";

export default function MaterialConsumptionTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Material", field: "name", flex: 1.5 },
    { headerName: "Required Qty", field: "reqQty" },
    { headerName: "Issued", field: "issuedQty" },
    { headerName: "Consumed Today", field: "consumedQty" },
    { 
      headerName: "Site Balance", 
      field: "balance",
      valueGetter: p => p.data.issuedQty - p.data.consumedQty
    },
    { headerName: "Supplier", field: "supplier", flex: 1.2 }
  ], []);

  const data = MOCK_DB.materials.filter(m => m.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Material Consumption Log"
        columns={columns}
        rows={data}
      />
    </div>
  );
}
