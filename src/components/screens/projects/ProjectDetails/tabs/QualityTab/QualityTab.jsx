import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import styles from "./QualityTab.module.scss";
import { Download, Eye } from "lucide-react";

export default function QualityTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Report ID", field: "id", flex: 0.8 },
    { headerName: "Type", field: "type" },
    { headerName: "Inspector", field: "inspector" },
    { headerName: "Date", field: "date" },
    { headerName: "Status", field: "status" }
  ], []);

  const tableActions = useMemo(() => [
    { name: "View", icon: <Eye size={16} />, onClick: () => {} },
    { name: "Download", icon: <Download size={16} />, onClick: () => {} }
  ], []);

  const data = [
    { id: "QC-101", type: "Concrete Cube Test", inspector: "Ravi Kumar", date: "20 Jul 2026", status: "Approved" },
    { id: "QC-102", type: "Steel Reinforcement Check", inspector: "Amit Singh", date: "21 Jul 2026", status: "Rework Required" },
    { id: "QC-103", type: "Snag List", inspector: project?.manager || "John", date: "22 Jul 2026", status: "Under Review" }
  ];

  return (
    <div className={styles.container}>
      <DataTable 
        title="Quality & Inspections"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
        actions={tableActions}
      />
    </div>
  );
}
