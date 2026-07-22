"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { MOCK_DB } from "@/constants/mockDataGenerator";

import styles from "./SiteDetails.module.scss";
import CustomTabs from "@/components/ui/CustomTabs/CustomTabs";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import { 
  ArrowLeft, FileText, CheckCircle, Clock, 
  MapPin, Package, DollarSign, AlertTriangle, CloudSun 
} from "lucide-react";

// Tab imports
import DailyLogTab from "./tabs/DailyLogTab/DailyLogTab";
import LabourAttendanceTab from "./tabs/LabourAttendanceTab/LabourAttendanceTab";
import WorkProgressTab from "./tabs/WorkProgressTab/WorkProgressTab";
import MaterialConsumptionTab from "./tabs/MaterialConsumptionTab/MaterialConsumptionTab";
import MachineryTab from "./tabs/MachineryTab/MachineryTab";
import ExpensesTab from "./tabs/ExpensesTab/ExpensesTab";
import SitePhotosTab from "./tabs/SitePhotosTab/SitePhotosTab";
import IssuesTab from "./tabs/IssuesTab/IssuesTab";
import SafetyTab from "./tabs/SafetyTab/SafetyTab";
import QualityInspectionTab from "./tabs/QualityInspectionTab/QualityInspectionTab";
import VisitorsRegisterTab from "./tabs/VisitorsRegisterTab/VisitorsRegisterTab";
import WeatherTab from "./tabs/WeatherTab/WeatherTab";
import DocumentsTab from "./tabs/DocumentsTab/DocumentsTab";
import NotesTab from "./tabs/NotesTab/NotesTab";
import TimelineTab from "./tabs/TimelineTab/TimelineTab";
import ActivityLogTab from "./tabs/ActivityLogTab/ActivityLogTab";

export default function SiteDetails({ id }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const tabQuery = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabQuery || "Daily Log");

  useEffect(() => {
    if (tabQuery) {
      setActiveTab((prev) => (prev !== tabQuery ? tabQuery : prev));
    }
  }, [tabQuery]);

  const project = MOCK_DB.projects.find(p => p.id === id) || MOCK_DB.projects[0];

  const TABS = [
    "Daily Log", "Labour Attendance", "Work Progress", "Material Consumption", 
    "Machinery & Equipment", "Expenses", "Site Photos", "Issues", 
    "Safety", "Quality Inspection", "Visitors Register", "Weather", 
    "Documents", "Notes", "Timeline", "Activity Log"
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
            <span className={styles.locationBadge}><MapPin size={12} /> Coimbatore Site</span>
          </div>
        </div>

        {/* Massive Site Dashboard KPIs */}
        <div className={styles.kpiGrid}>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Today's Progress</span>
            <span className={styles.kpiValueHighlight}>2.4%</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Overall Progress</span>
            <span className={styles.kpiValue}>{project.progress}%</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Workers Present</span>
            <span className={styles.kpiValue}>58 / 65</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Material Cost Today</span>
            <span className={styles.kpiValue}>₹78,000</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Expense Today</span>
            <span className={styles.kpiValue}>₹1,24,000</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Open Issues</span>
            <span className={styles.kpiValueAlert}>3</span>
          </div>
          <div className={styles.kpiBox}>
            <span className={styles.kpiLabel}>Weather</span>
            <span className={styles.kpiValue}><CloudSun size={16} /> Sunny</span>
          </div>
        </div>

        <div className={styles.quickActions}>
          <span className={styles.quickLabel}>Quick Actions:</span>
          <div className={styles.actionButtons}>
            <CustomButton variant="primary" leftIcon={<FileText size={14} />}>Add Daily Log</CustomButton>
            <CustomButton variant="outline" leftIcon={<Clock size={14} />}>Mark Attendance</CustomButton>
            <CustomButton variant="outline" leftIcon={<Package size={14} />}>Issue Materials</CustomButton>
            <CustomButton variant="outline" leftIcon={<DollarSign size={14} />}>Add Expense</CustomButton>
            <CustomButton variant="outline" leftIcon={<AlertTriangle size={14} />}>Report Issue</CustomButton>
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
        {activeTab === "Daily Log" && <DailyLogTab project={project} />}
        {activeTab === "Labour Attendance" && <LabourAttendanceTab project={project} />}
        {activeTab === "Work Progress" && <WorkProgressTab project={project} />}
        {activeTab === "Material Consumption" && <MaterialConsumptionTab project={project} />}
        {activeTab === "Machinery & Equipment" && <MachineryTab project={project} />}
        {activeTab === "Expenses" && <ExpensesTab project={project} />}
        {activeTab === "Site Photos" && <SitePhotosTab />}
        {activeTab === "Issues" && <IssuesTab project={project} />}
        {activeTab === "Safety" && <SafetyTab project={project} />}
        {activeTab === "Quality Inspection" && <QualityInspectionTab project={project} />}
        {activeTab === "Visitors Register" && <VisitorsRegisterTab project={project} />}
        {activeTab === "Weather" && <WeatherTab />}
        {activeTab === "Documents" && <DocumentsTab project={project} />}
        {activeTab === "Notes" && <NotesTab project={project} />}
        {activeTab === "Timeline" && <TimelineTab project={project} />}
        {activeTab === "Activity Log" && <ActivityLogTab project={project} />}
      </div>
    </PageLayout>
  );
}
