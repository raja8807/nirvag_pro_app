import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./PaymentsTab.module.scss";

export default function PaymentsTab({ client }) {
  const columns = useMemo(() => [
    { headerName: "Payment ID", field: "id", flex: 0.8 },
    { headerName: "Invoice ID", field: "invoiceId" },
    { headerName: "Type", field: "type" },
    { headerName: "Method", field: "method" },
    { headerName: "Date", field: "date", cellRenderer: p => new Date(p.value).toLocaleDateString() },
    { headerName: "Amount", field: "amount", cellRenderer: p => `₹${Number(p.value).toLocaleString()}` },
    { headerName: "Status", field: "status" }
  ], []);

  const data = MOCK_DB.payments.filter(p => p.clientId === client?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Payment History"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
      />
    </div>
  );
}
