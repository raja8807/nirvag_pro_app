"use client";

import React from "react";
import styles from "./WorkforceReports.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Download, FileText, Calendar, HardHat, TrendingUp } from "lucide-react";

export default function WorkforceReports() {
  
  const reports = [
    {
      title: "Muster Roll (Attendance Register)",
      description: "Complete daily attendance matrix for all workers, required for compliance.",
      icon: <Calendar size={24} />,
      filters: ["Month", "Project", "Contractor"]
    },
    {
      title: "Labour Cost Analysis",
      description: "Breakdown of daily wage costs across different trades and projects.",
      icon: <TrendingUp size={24} />,
      filters: ["Date Range", "Project"]
    },
    {
      title: "Contractor Supply Summary",
      description: "Total mandays supplied and payments processed per contractor.",
      icon: <HardHat size={24} />,
      filters: ["Month", "Contractor"]
    },
    {
      title: "Worker Advance Register",
      description: "Current outstanding advances across the entire workforce.",
      icon: <FileText size={24} />,
      filters: ["Project"]
    }
  ];

  return (
    <>
      <PageHead title="Workforce Reports & Compliance" />
      <PageLayout className={styles.container}>
        <div className={styles.reportsGrid}>
          {reports.map((report, idx) => (
            <div key={idx} className={styles.reportCard}>
              <div className={styles.iconWrapper}>
                {report.icon}
              </div>
              <div className={styles.reportInfo}>
                <h3>{report.title}</h3>
                <p>{report.description}</p>
                
                <div className={styles.filtersSection}>
                  {report.filters.map(filter => (
                    <select key={filter} defaultValue="">
                      <option value="" disabled>Select {filter}</option>
                      <option value="1">Option 1</option>
                    </select>
                  ))}
                </div>

                <div className={styles.actions}>
                  <CustomButton variant="outline" leftIcon={<Download size={16} />}>Download CSV</CustomButton>
                  <CustomButton leftIcon={<FileText size={16} />}>Generate PDF</CustomButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
