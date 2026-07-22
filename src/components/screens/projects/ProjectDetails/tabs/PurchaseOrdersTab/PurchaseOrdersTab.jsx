import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./PurchaseOrdersTab.module.scss";
import { Download, Eye } from "lucide-react";

export default function PurchaseOrdersTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "PO Number", field: "id", flex: 0.8 },
    { headerName: "Supplier", field: "supplier", flex: 1.5 },
    { headerName: "Amount", field: "amount", cellRenderer: p => `₹${p.value?.toLocaleString()}` },
    { headerName: "Status", field: "status" }
  ], []);

  const tableActions = useMemo(() => [
    { name: "View", icon: <Eye size={16} />, onClick: () => {} },
    { name: "Download", icon: <Download size={16} />, onClick: () => {} }
  ], []);

  const data = MOCK_DB.purchaseOrders.filter(po => po.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Purchase Orders"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
        actions={tableActions}
      />
    </div>
  );
}
