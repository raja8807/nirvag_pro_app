import React, { useState, useMemo } from "react";
import DataTable from "@/components/ui/DataTable/DataTable";
import styles from "./AttachmentsTab.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Upload, Folder, FileText, Download, Trash2, Eye } from "lucide-react";

const FOLDERS = [
  "All Files",
  "Customer Documents",
  "Quotations",
  "Agreements",
  "Land Documents",
  "Approval Documents",
  "Images",
  "Videos",
  "Blueprints",
  "Others",
];

const MOCK_FILES = [
  {
    id: 1,
    name: "Land_Registry_Final.pdf",
    folder: "Land Documents",
    date: "20 Jul 2026",
    user: "Rahul",
    version: "v1.0",
  },
  {
    id: 2,
    name: "Site_Photos.zip",
    folder: "Images",
    date: "19 Jul 2026",
    user: "Sarah",
    version: "v1.0",
  },
  {
    id: 3,
    name: "Quotation_v2.pdf",
    folder: "Quotations",
    date: "18 Jul 2026",
    user: "Sarah",
    version: "v2.0",
  },
  {
    id: 4,
    name: "Floor_Plan_A.dwg",
    folder: "Blueprints",
    date: "15 Jul 2026",
    user: "Rahul",
    version: "v1.2",
  },
];

const AttachmentsTab = () => {
  const [activeFolder, setActiveFolder] = useState("All Files");

  const filteredFiles =
    activeFolder === "All Files"
      ? MOCK_FILES
      : MOCK_FILES.filter((f) => f.folder === activeFolder);

  const columns = useMemo(
    () => [
      {
        headerName: "File Name",
        field: "name",
        flex: 1.5,
        cellRenderer: (params) => {
          if (!params.value) return null;
          return (
            <div className={styles.fileInfo}>
              <FileText size={16} />
              <span>{params.value}</span>
            </div>
          );
        },
      },
      { headerName: "Upload Date", field: "date" },
      { headerName: "Uploaded By", field: "user" },
      { headerName: "Version", field: "version" },
    ],
    [],
  );

  const tableActions = useMemo(() => [
    { name: "Preview", icon: <Eye size={16} />, onClick: () => alert('Preview clicked') },
    { name: "Download", icon: <Download size={16} />, onClick: () => alert('Download clicked') },
    { name: "Delete", icon: <Trash2 size={16} color="red" />, onClick: () => alert('Delete clicked') }
  ], []);

  return (
    <div className={styles.container}>
      {/* Sidebar Folders */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarTitle}>Folders</div>
        <div className={styles.folderList}>
          {FOLDERS.map((folder) => (
            <div
              key={folder}
              className={`${styles.folder} ${activeFolder === folder ? styles.active : ""}`}
              onClick={() => setActiveFolder(folder)}
            >
              <Folder size={16} />
              {folder}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.main}>
        <div className={styles.header}>
          <h3>{activeFolder}</h3>
          <CustomButton leftIcon={<Upload size={16} />}>
            Upload File
          </CustomButton>
        </div>

        <DataTable
          title={activeFolder}
          columns={columns}
          rows={filteredFiles}
          dropdownFieldName="folder"
          actions={tableActions}
        />
      </div>
    </div>
  );
};

export default AttachmentsTab;
