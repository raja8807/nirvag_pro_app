import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./InvoicesTab.module.scss";
import { Download, Eye } from "lucide-react";

export default function InvoicesTab({ client }) {
  const columns = useMemo(() => [
    { headerName: "Invoice ID", field: "id", flex: 0.8 },
    { headerName: "Project", field: "projectName", flex: 1.2 },
    { headerName: "Type", field: "type" },
    { headerName: "Date", field: "date", cellRenderer: p => new Date(p.value).toLocaleDateString() },
    { headerName: "Due Date", field: "dueDate", cellRenderer: p => new Date(p.value).toLocaleDateString() },
    { headerName: "Amount", field: "amount", cellRenderer: p => `₹${Number(p.value).toLocaleString()}` },
    { headerName: "Status", field: "status" }
  ], []);

  const tableActions = useMemo(() => [
    { name: "View", icon: <Eye size={16} />, onClick: () => {} },
    { name: "Download", icon: <Download size={16} />, onClick: () => {} }
  ], []);

  const data = MOCK_DB.invoices.filter(i => i.clientId === client?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Client Invoices"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
        actions={tableActions}
      />
    </div>
  );
}
