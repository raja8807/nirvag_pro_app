"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { MOCK_DB } from "@/constants/mockDataGenerator";

import styles from "./ProjectDetails.module.scss";
import CustomTabs from "@/components/ui/CustomTabs/CustomTabs";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import { ArrowLeft, Edit, FileText, CheckCircle } from "lucide-react";

import OverviewTab from "./tabs/OverviewTab/OverviewTab";
import BOQTab from "./tabs/BOQTab/BOQTab";
import MilestonesTab from "./tabs/MilestonesTab/MilestonesTab";
import SiteProgressTab from "./tabs/SiteProgressTab/SiteProgressTab";
import TeamTab from "./tabs/TeamTab/TeamTab";
import MaterialsTab from "./tabs/MaterialsTab/MaterialsTab";
import EquipmentTab from "./tabs/EquipmentTab/EquipmentTab";
import PurchaseOrdersTab from "./tabs/PurchaseOrdersTab/PurchaseOrdersTab";
import ExpensesTab from "./tabs/ExpensesTab/ExpensesTab";
import InvoicesTab from "./tabs/InvoicesTab/InvoicesTab";
import PaymentsTab from "./tabs/PaymentsTab/PaymentsTab";
import DocumentsTab from "./tabs/DocumentsTab/DocumentsTab";
import QualityTab from "./tabs/QualityTab/QualityTab";
import IssuesTab from "./tabs/IssuesTab/IssuesTab";
import TasksTab from "./tabs/TasksTab/TasksTab";
import TimelineTab from "./tabs/TimelineTab/TimelineTab";
import NotesTab from "./tabs/NotesTab/NotesTab";
import ActivityLogTab from "./tabs/ActivityLogTab/ActivityLogTab";

export default function ProjectDetails({ id }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const tabQuery = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabQuery || "Overview");

  useEffect(() => {
    if (tabQuery) {
      setActiveTab((prev) => (prev !== tabQuery ? tabQuery : prev));
    }
  }, [tabQuery]);

  const project = MOCK_DB.projects.find(p => p.id === id) || MOCK_DB.projects[0];

  const TABS = [
    "Overview", "BOQ", "Milestones", "Site Progress", "Team", 
    "Materials", "Equipment", "Purchase Orders", "Expenses", 
    "Invoices", "Payments", "Documents", "Quality & Inspection", 
    "Issues & Risks", "Tasks", "Timeline", "Notes", "Activity Log"
  ];

  if (!project) return <div>Loading...</div>;

  return (
    <PageLayout className={styles.container}>
      <br />
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.titleSection}>
            <button className={styles.backBtn} onClick={() => router.back()}>
              <ArrowLeft size={20} />
            </button>
            <h1 className={styles.title}>{project.name}</h1>
            <span className={styles.statusBadge}>{project.status}</span>
          </div>
          <div className={styles.actionButtons}>
            <CustomButton variant="outline" leftIcon={<Edit size={14} />}>Edit Project</CustomButton>
            <CustomButton variant="primary" leftIcon={<CheckCircle size={14} />}>Update Progress</CustomButton>
          </div>
        </div>

        {/* KPIs Section */}
        <div className={styles.kpiGrid}>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Progress</span>
            <span className={styles.kpiValue}>{project.progress}%</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Budget</span>
            <span className={styles.kpiValue}>₹{project.budget?.toLocaleString()}</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Spent</span>
            <span className={styles.kpiValue}>₹{project.spent?.toLocaleString()}</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Remaining</span>
            <span className={styles.kpiValue}>₹{(project.budget - project.spent)?.toLocaleString()}</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Client</span>
            <span className={styles.kpiValue}>{project.clientName}</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Manager</span>
            <span className={styles.kpiValue}>{project.manager}</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Site Engineer</span>
            <span className={styles.kpiValue}>{project.engineer}</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Days Remaining</span>
            <span className={styles.kpiValue}>
              {Math.max(0, Math.ceil((new Date(project.endDate) - new Date()) / (1000 * 60 * 60 * 24)))}
            </span>
          </div>
        </div>
      </div>

      <CustomTabs 
        tabs={TABS} 
        activeTab={activeTab} 
        onTabChange={(tab) => {
          setActiveTab(tab);
          const params = new URLSearchParams(searchParams.toString());
          params.set("tab", tab);
          router.replace(`${pathname}?${params.toString()}`, { scroll: false });
        }} 
      />

      <div className={styles.content}>
        {activeTab === "Overview" && <OverviewTab project={project} />}
        {activeTab === "BOQ" && <BOQTab project={project} />}
        {activeTab === "Milestones" && <MilestonesTab project={project} />}
        {activeTab === "Site Progress" && <SiteProgressTab project={project} />}
        {activeTab === "Team" && <TeamTab project={project} />}
        {activeTab === "Materials" && <MaterialsTab project={project} />}
        {activeTab === "Equipment" && <EquipmentTab project={project} />}
        {activeTab === "Purchase Orders" && <PurchaseOrdersTab project={project} />}
        {activeTab === "Expenses" && <ExpensesTab project={project} />}
        {activeTab === "Invoices" && <InvoicesTab project={project} />}
        {activeTab === "Payments" && <PaymentsTab project={project} />}
        {activeTab === "Documents" && <DocumentsTab project={project} />}
        {activeTab === "Quality & Inspection" && <QualityTab project={project} />}
        {activeTab === "Issues & Risks" && <IssuesTab project={project} />}
        {activeTab === "Tasks" && <TasksTab project={project} />}
        {activeTab === "Timeline" && <TimelineTab project={project} />}
        {activeTab === "Notes" && <NotesTab project={project} />}
        {activeTab === "Activity Log" && <ActivityLogTab project={project} />}
      </div>
    </PageLayout>
  );
}
