import React, { useMemo } from "react";
import styles from "./QuotationsList.module.scss";
import { Eye, Download, Mail, Copy, Edit2 } from "lucide-react";
import DataTable from "@/components/ui/DataTable/DataTable";

const MOCK_QUOTES = [
  {
    id: 1,
    quoteNo: "QT-2026-001",
    date: "18 Jul 2026",
    amount: "₹ 45,00,000",
    status: "Pending Approval",
    createdBy: "Sarah Jenkins",
  },
  {
    id: 2,
    quoteNo: "QT-2026-001-v2",
    date: "20 Jul 2026",
    amount: "₹ 42,50,000",
    status: "Draft",
    createdBy: "Sarah Jenkins",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Pending Approval":
      return styles.pending;
    case "Draft":
      return styles.draft;
    default:
      return "";
  }
};

const QuotationsList = () => {
  const columns = useMemo(
    () => [
      { headerName: "Quotation No", field: "quoteNo", flex: 1.5 },
      { headerName: "Date", field: "date" },
      { headerName: "Amount", field: "amount" },
      { headerName: "Created By", field: "createdBy" },
      {
        headerName: "Status",
        field: "status",
      }
    ],
    []
  );

  const tableActions = useMemo(
    () => [
      { name: "Preview PDF", icon: <Eye size={16} />, onClick: (row) => console.log("Preview", row) },
      { name: "Download PDF", icon: <Download size={16} />, onClick: (row) => console.log("Download", row) },
      { name: "Email", icon: <Mail size={16} />, onClick: (row) => console.log("Email", row) },
      { name: "Duplicate", icon: <Copy size={16} />, onClick: (row) => console.log("Duplicate", row) },
      { name: "Revise", icon: <Edit2 size={16} />, onClick: (row) => console.log("Revise", row) },
    ],
    []
  );

  return (
    <DataTable
      // title="Quotations"
      columns={columns}
      rows={MOCK_QUOTES}
      dropdownFieldName="status"
      actions={tableActions}
    />
  );
};

export default QuotationsList;
