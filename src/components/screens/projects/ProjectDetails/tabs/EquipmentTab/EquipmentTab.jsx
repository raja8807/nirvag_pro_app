import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import styles from "./EquipmentTab.module.scss";

export default function EquipmentTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Equipment", field: "name" },
    { headerName: "Operator", field: "operator" },
    { headerName: "Allocation Date", field: "allocationDate" },
    { headerName: "Return Date", field: "returnDate" },
    { headerName: "Condition", field: "condition" }
  ], []);

  const data = [
    { name: "JCB Excavator", operator: "Ramesh Singh", allocationDate: "10 Jul 2026", returnDate: "30 Jul 2026", condition: "Good" },
    { name: "Concrete Mixer", operator: "Suresh Kumar", allocationDate: "15 Jul 2026", returnDate: "20 Jul 2026", condition: "Requires Maintenance" },
    { name: "Scaffolding Set", operator: "N/A", allocationDate: "01 Jul 2026", returnDate: "15 Aug 2026", condition: "Good" }
  ];

  return (
    <div className={styles.container}>
      <DataTable 
        title="Assigned Equipment"
        columns={columns}
        rows={data}
      />
    </div>
  );
}
