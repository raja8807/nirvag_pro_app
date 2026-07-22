import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import styles from "./ReceiptsTab.module.scss";
import { Download, Eye } from "lucide-react";

export default function ReceiptsTab({ client }) {
  const columns = useMemo(() => [
    { headerName: "Receipt ID", field: "id" },
    { headerName: "Payment ID", field: "paymentId" },
    { headerName: "Type", field: "type" },
    { headerName: "Date Generated", field: "date" },
    { headerName: "Status", field: "status" }
  ], []);

  const tableActions = useMemo(() => [
    { name: "View", icon: <Eye size={16} />, onClick: () => {} },
    { name: "Download", icon: <Download size={16} />, onClick: () => {} }
  ], []);

  const data = [
    { id: "REC-1001", paymentId: "PAY-4000", type: "Advance Receipt", date: "15 Jul 2026", status: "Generated" },
    { id: "REC-1002", paymentId: "PAY-4012", type: "Partial Receipt", date: "10 Jul 2026", status: "Sent" },
  ];

  return (
    <div className={styles.container}>
      <DataTable 
        title="Client Receipts"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
        actions={tableActions}
      />
    </div>
  );
}
