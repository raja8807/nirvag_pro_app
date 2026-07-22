import React, { useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import styles from "./AgreementsTab.module.scss";
import { Download, Eye } from "lucide-react";

export default function AgreementsTab({ client }) {
  const columns = useMemo(() => [
    { headerName: "Agreement ID", field: "id" },
    { headerName: "Title", field: "title", flex: 1.5 },
    { headerName: "Type", field: "type" },
    { headerName: "Valid Until", field: "validUntil" },
    { headerName: "Status", field: "status" }
  ], []);

  const tableActions = useMemo(() => [
    { name: "View", icon: <Eye size={16} />, onClick: () => {} },
    { name: "Download", icon: <Download size={16} />, onClick: () => {} }
  ], []);

  const data = [
    { id: "AGR-1001", title: "Standard Construction Contract", type: "Construction Agreement", validUntil: "2027-12-31", status: "Signed" },
    { id: "AGR-1002", title: "AMC for HVAC", type: "AMC", validUntil: "2028-06-30", status: "Under Discussion" },
  ];

  return (
    <div className={styles.container}>
      <DataTable 
        title="Client Agreements"
        columns={columns}
        rows={data}
        dropdownFieldName="status"
        actions={tableActions}
      />
    </div>
  );
}
