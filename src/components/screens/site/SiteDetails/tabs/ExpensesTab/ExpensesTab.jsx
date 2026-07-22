import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import styles from "./ExpensesTab.module.scss";

export default function ExpensesTab({ project }) {
  const columns = useMemo(() => [
    { headerName: "Expense ID", field: "id" },
    { headerName: "Category", field: "category" },
    { headerName: "Date", field: "date", cellRenderer: p => new Date(p.value).toLocaleDateString() },
    { headerName: "Amount", field: "amount", cellRenderer: p => `₹${p.value?.toLocaleString()}` },
    { headerName: "Status", field: "status" }
  ], []);

  const data = MOCK_DB.expenses.filter(e => e.projectId === project?.id);

  return (
    <div className={styles.container}>
      <DataTable 
        title="Project Expenses"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
      />
    </div>
  );
}
