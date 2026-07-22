"use client";

import React, { useState, useMemo } from "react";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import DataTable from "@/components/ui/DataTable/DataTable";
import PageHead from "@/components/ui/PageHead/PageHead";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { CheckCircle, Save } from "lucide-react";
import styles from "./AttendanceGrid.module.scss";

export default function AttendanceGrid() {
  const [selectedProject, setSelectedProject] = useState(MOCK_DB.projects[0]?.id || "");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Derived workers based on selected project
  const currentWorkers = useMemo(() => {
    return MOCK_DB.workers.filter(w => w.currentProjectId === selectedProject);
  }, [selectedProject]);

  const StatusCellRenderer = (params) => {
    return (
      <select 
        className={styles.statusDropdown}
        defaultValue="Present"
        onClick={(e) => e.stopPropagation()}
      >
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
        <option value="Half Day">Half Day</option>
        <option value="Leave">Leave</option>
      </select>
    );
  };

  const OTHoursRenderer = (params) => {
    return (
      <input 
        type="number" 
        className={styles.otInput}
        defaultValue={0}
        min={0}
        max={12}
        onClick={(e) => e.stopPropagation()}
      />
    );
  };

  const columns = useMemo(() => [
    { headerName: "Worker Code", field: "code", minWidth: 120 },
    { headerName: "Name", field: "name", minWidth: 200, flex: 1 },
    { headerName: "Trade", field: "trade", minWidth: 150 },
    { headerName: "Contractor", field: "contractorName", minWidth: 200 },
    { 
      headerName: "Daily Status", 
      field: "attendanceStatus", 
      cellRenderer: StatusCellRenderer,
      minWidth: 150,
      sortable: false,
      filter: false
    },
    { 
      headerName: "OT Hours", 
      field: "otHours", 
      cellRenderer: OTHoursRenderer,
      minWidth: 120,
      sortable: false,
      filter: false
    }
  ], []);

  const handleSave = () => {
    console.log("Saving bulk attendance for project:", selectedProject, "on", selectedDate);
    alert("Attendance saved successfully!");
  };

  return (
    <>
      <PageHead 
        title="Bulk Attendance Register" 
        right={
          <CustomButton 
            leftIcon={<Save size={16} />} 
            onClick={handleSave}
          >
            Save Register
          </CustomButton>
        }
      />
      <PageLayout className={styles.container}>
        <div className={styles.filterBar}>
          <div className={styles.filterGroup}>
            <label>Select Project Site</label>
            <select 
              value={selectedProject} 
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              {MOCK_DB.projects.filter(p => p.status === 'In Progress').map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>Attendance Date</label>
            <input 
              type="date" 
              value={selectedDate} 
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <CustomButton variant="outline" leftIcon={<CheckCircle size={16} />}>
            Mark All Present
          </CustomButton>
        </div>

        <div className={styles.gridContainer}>
          <DataTable
            rows={currentWorkers}
            columns={columns}
            pageSize={50} // High page size for bulk entry
            searchable
            selectable
          />
        </div>
      </PageLayout>
    </>
  );
}
