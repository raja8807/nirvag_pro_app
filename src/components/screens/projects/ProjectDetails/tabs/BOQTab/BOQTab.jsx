import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./BOQTab.module.scss";

export default function BOQTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "BOQ ID", field: "id", flex: 0.8 },
    { headerName: "Category", field: "category" },
    { headerName: "Item", field: "item", flex: 1.5 },
    { headerName: "Qty", field: "qty" },
    { headerName: "Unit", field: "unit" },
    { headerName: "Rate", field: "rate", cellRenderer: p => `₹${p.value}` },
    { headerName: "Est. Cost", field: "estimatedCost", cellRenderer: p => `₹${p.value?.toLocaleString()}` },
    { headerName: "Actual Cost", field: "actualCost", cellRenderer: p => `₹${p.value?.toLocaleString()}` }
  ], []);

  const data = MOCK_DB.boq.filter(b => b.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Bill of Quantities"
        columns={columns}
        rows={data}
      />
    </div>
  );
}
