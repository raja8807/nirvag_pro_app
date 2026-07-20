import React from "react";
import styles from "./QuotationsList.module.scss";
import { Eye, Download, Mail, Copy, Edit2 } from "lucide-react";

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
  if (status.includes("Approved") || status === "Accepted") return styles.approved;
  if (status.includes("Pending")) return styles.pending;
  return styles.draft;
};

const QuotationsList = () => {
  return (
    <div className={styles.card}>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Quotation No</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Created By</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_QUOTES.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 500 }}>{item.quoteNo}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>{item.createdBy}</td>
                <td>
                  <span className={`${styles.badge} ${getStatusClass(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button title="Preview PDF"><Eye size={16} /></button>
                    <button title="Download PDF"><Download size={16} /></button>
                    <button title="Email"><Mail size={16} /></button>
                    <button title="Duplicate"><Copy size={16} /></button>
                    <button title="Revise"><Edit2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuotationsList;
