import React, { useState } from "react";
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
  { id: 1, name: "Land_Registry_Final.pdf", folder: "Land Documents", date: "20 Jul 2026", user: "Rahul", version: "v1.0" },
  { id: 2, name: "Site_Photos.zip", folder: "Images", date: "19 Jul 2026", user: "Sarah", version: "v1.0" },
  { id: 3, name: "Quotation_v2.pdf", folder: "Quotations", date: "18 Jul 2026", user: "Sarah", version: "v2.0" },
  { id: 4, name: "Floor_Plan_A.dwg", folder: "Blueprints", date: "15 Jul 2026", user: "Rahul", version: "v1.2" },
];

const AttachmentsTab = () => {
  const [activeFolder, setActiveFolder] = useState("All Files");

  const filteredFiles = activeFolder === "All Files" 
    ? MOCK_FILES 
    : MOCK_FILES.filter(f => f.folder === activeFolder);

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
          <CustomButton leftIcon={<Upload size={16} />}>Upload File</CustomButton>
        </div>

        <div className={styles.fileList}>
          <table>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Upload Date</th>
                <th>Uploaded By</th>
                <th>Version</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFiles.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", color: "#6b7280" }}>No files in this folder.</td>
                </tr>
              ) : (
                filteredFiles.map((file) => (
                  <tr key={file.id}>
                    <td>
                      <div className={styles.fileInfo}>
                        <FileText size={16} />
                        <span>{file.name}</span>
                      </div>
                    </td>
                    <td>{file.date}</td>
                    <td>{file.user}</td>
                    <td>{file.version}</td>
                    <td>
                      <div className={styles.actions}>
                        <button title="Preview"><Eye size={16}/></button>
                        <button title="Download"><Download size={16}/></button>
                        <button title="Delete" className={styles.delete}><Trash2 size={16}/></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttachmentsTab;
