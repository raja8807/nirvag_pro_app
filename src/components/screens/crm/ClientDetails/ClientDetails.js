"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { MOCK_DB } from "@/constants/mockDataGenerator";

import styles from "./ClientDetails.module.scss";
import CustomTabs from "@/components/ui/CustomTabs/CustomTabs";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import {
  FolderArchive,
  Phone,
  MessageCircle,
  Mail,
  Calendar,
  FileText,
  ArrowLeft,
  Star,
} from "lucide-react";

import OverviewTab from "./tabs/OverviewTab/OverviewTab";
import ProjectsTab from "./tabs/ProjectsTab/ProjectsTab";
import AgreementsTab from "./tabs/AgreementsTab/AgreementsTab";
import InvoicesTab from "./tabs/InvoicesTab/InvoicesTab";
import PaymentsTab from "./tabs/PaymentsTab/PaymentsTab";
import ReceiptsTab from "./tabs/ReceiptsTab/ReceiptsTab";
import DocumentsTab from "./tabs/DocumentsTab/DocumentsTab";
import CommunicationTab from "./tabs/CommunicationTab/CommunicationTab";
import MeetingsTab from "./tabs/MeetingsTab/MeetingsTab";
import SiteVisitsTab from "./tabs/SiteVisitsTab/SiteVisitsTab";
import NotesTab from "./tabs/NotesTab/NotesTab";
import TasksTab from "./tabs/TasksTab/TasksTab";
import ActivityLogTab from "./tabs/ActivityLogTab/ActivityLogTab";

export default function ClientDetails({ id }) {
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

  // Find client by ID
  const client = MOCK_DB.clients.find(c => c.id === id) || MOCK_DB.clients[0];

  const TABS = [
    "Overview",
    "Projects",
    "Agreements",
    "Invoices",
    "Payments",
    "Receipts",
    "Documents",
    "Communication",
    "Meetings",
    "Site Visits",
    "Notes",
    "Tasks",
    "Activity Log"
  ];

  if (!client) return <div>Loading...</div>;

  return (
    <PageLayout className={styles.container}>
      <br />
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.titleSection}>
            <button className={styles.backBtn} onClick={() => router.back()}>
              <ArrowLeft size={20} />
            </button>
            <h1 className={styles.title}>{client.name}</h1>
            <span className={styles.statusBadge}>Active Client</span>
            <div className={styles.rating}>
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
            </div>
          </div>
        </div>

        <div className={styles.quickActions}>
          <span className={styles.quickLabel}>Quick Actions:</span>
          <div className={styles.actionButtons}>
            <CustomButton variant="outline" leftIcon={<Phone size={14} />}>Call</CustomButton>
            <CustomButton variant="outline" leftIcon={<MessageCircle size={14} />}>WhatsApp</CustomButton>
            <CustomButton variant="outline" leftIcon={<Mail size={14} />}>Email</CustomButton>
            <CustomButton variant="outline" leftIcon={<FileText size={14} />}>New Project</CustomButton>
            <CustomButton variant="outline" leftIcon={<FileText size={14} />}>New Invoice</CustomButton>
            <CustomButton variant="primary" leftIcon={<FolderArchive size={14} />}>Receive Payment</CustomButton>
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
        {activeTab === "Overview" && <OverviewTab client={client} />}
        {activeTab === "Projects" && <ProjectsTab client={client} />}
        {activeTab === "Agreements" && <AgreementsTab client={client} />}
        {activeTab === "Invoices" && <InvoicesTab client={client} />}
        {activeTab === "Payments" && <PaymentsTab client={client} />}
        {activeTab === "Receipts" && <ReceiptsTab client={client} />}
        {activeTab === "Documents" && <DocumentsTab client={client} />}
        {activeTab === "Communication" && <CommunicationTab client={client} />}
        {activeTab === "Meetings" && <MeetingsTab client={client} />}
        {activeTab === "Site Visits" && <SiteVisitsTab client={client} />}
        {activeTab === "Notes" && <NotesTab client={client} />}
        {activeTab === "Tasks" && <TasksTab client={client} />}
        {activeTab === "Activity Log" && <ActivityLogTab client={client} />}
      </div>
    </PageLayout>
  );
}
