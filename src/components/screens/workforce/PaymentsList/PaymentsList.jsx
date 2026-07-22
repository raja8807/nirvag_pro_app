"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/ui/DataTable/DataTable";
import { MOCK_DB } from "@/constants/mockDataGenerator";

import styles from "./PaymentsList.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Download } from "lucide-react";

export default function PaymentsList() {
  const router = useRouter();

  const StatusCellRenderer = (params) => {
    let color = "#3b82f6"; // blue
    let bg = "#eff6ff";
    if (params.value === "Paid") {
      color = "#22c55e"; // green
      bg = "#f0fdf4";
    } else if (params.value === "Pending") {
      color = "#f59e0b"; // orange
      bg = "#fffbeb";
    }

    return (
      <span style={{ 
        color, 
        backgroundColor: bg,
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: 600
      }}>
        {params.value}
      </span>
    );
  };

  const columns = useMemo(() => [
    { headerName: "Period", field: "period", minWidth: 200 },
    { headerName: "Worker Name", field: "workerName", minWidth: 200 },
    { headerName: "Contractor", field: "contractor", minWidth: 200 },
    { headerName: "Trade", field: "trade", minWidth: 150 },
    { headerName: "Days", field: "presentDays", minWidth: 100 },
    { headerName: "OT", field: "otHours", minWidth: 100 },
    { headerName: "Gross (₹)", field: "gross", minWidth: 120, cellRenderer: p => `₹${p.value}` },
    { headerName: "Advance Ded.", field: "advanceDeducted", minWidth: 130, cellRenderer: p => <span style={{color: 'red'}}>-₹{p.value}</span> },
    { headerName: "Net Payable", field: "netPayable", minWidth: 150, cellRenderer: p => <strong>₹{p.value}</strong> },
    { 
      headerName: "Status", 
      field: "status", 
      cellRenderer: StatusCellRenderer,
      minWidth: 120,
    }
  ], []);

  return (
    <>
      <PageHead 
        title="Weekly Labour Payments Register" 
        right={
          <CustomButton 
            variant="outline"
            leftIcon={<Download size={16} />} 
          >
            Export Bank Sheet
          </CustomButton>
        }
      />
      <PageLayout>
        <DataTable
          rows={MOCK_DB.labourPayments}
          columns={columns}
          pageSize={15}
          searchable
          selectable
          dropdownFieldName="period"
        />
      </PageLayout>
    </>
  );
}
