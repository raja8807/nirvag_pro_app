"use client";

import React, { useState, useContext, useEffect } from "react";

import { LeadContext } from "@/context/LeadContext";

import styles from "./LeadDetails.module.scss";
import ProfileTab from "./tabs/ProfileTab/ProfileTab";
import TimelineTab from "./tabs/TimelineTab/TimelineTab";
import FollowUpsTab from "./tabs/FollowUpsTab/FollowUpsTab";
import MeetingsTab from "./tabs/MeetingsTab/MeetingsTab";
import SiteVisitsTab from "./tabs/SiteVisitsTab/SiteVisitsTab";
import QuotationsTab from "./tabs/QuotationsTab/QuotationsTab";
import TasksTab from "./tabs/TasksTab/TasksTab";
import NotesTab from "./tabs/NotesTab/NotesTab";
import AttachmentsTab from "./tabs/AttachmentsTab/AttachmentsTab";
import ActivityLogTab from "./tabs/ActivityLogTab/ActivityLogTab";
import CustomTabs from "@/components/ui/CustomTabs/CustomTabs";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
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
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import PageHead from "@/components/ui/PageHead/PageHead";

export default function LeadDetails({ id }) {
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

  const { leads } = useContext(LeadContext);

  // Find lead by ID (or fallback to first lead for demo purposes)
  const lead = leads.find((l) => l.id === id);

  const TABS = [
    "Overview",
    "Follow-ups",
    "Notes",
    "Tasks",
    "Timeline",
    "Quotations",
    "Meetings",
    "Site Visits",
    "Attachments",
    "Activity Log",
  ];

  if (!lead) return <div>Loading...</div>;

  return (
    <>
      <PageLayout className={styles.container}>
        <br />
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.titleSection}>
              <button className={styles.backBtn} onClick={() => router.back()}>
                <ArrowLeft size={20} />
              </button>
              <h1 className={styles.title}>
                {`${lead.firstName || ""} ${lead.lastName || ""}`.trim() || "-"}
              </h1>
              <span className={styles.statusBadge}>
                {lead.leadStatus || "New"}
              </span>
              <span className={styles.priorityBadge}>High</span>
              <div className={styles.rating}>
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} color="#d1d5db" />
              </div>
            </div>
          </div>

          <div className={styles.quickActions}>
            <span className={styles.quickLabel}>Quick Actions:</span>
            <div className={styles.actionButtons}>
              <CustomButton variant="outline" leftIcon={<Phone size={14} />}>
                Call
              </CustomButton>
              <CustomButton
                variant="outline"
                leftIcon={<MessageCircle size={14} />}
              >
                WhatsApp
              </CustomButton>
              <CustomButton variant="outline" leftIcon={<Mail size={14} />}>
                Email
              </CustomButton>
              <CustomButton variant="outline" leftIcon={<Calendar size={14} />}>
                Meeting
              </CustomButton>
              <CustomButton variant="outline" leftIcon={<FileText size={14} />}>
                Follow-up
              </CustomButton>
              <CustomButton variant="outline" leftIcon={<FileText size={14} />}>
                Quotation
              </CustomButton>
              <CustomButton
                variant="primary"
                leftIcon={<FolderArchive size={14} />}
              >
                Convert
              </CustomButton>
            </div>
          </div>
        </div>

        {/* <div className={styles.header}>
        <div className={styles.headerLeft}>
          <CustomButton
            leftIcon={<ArrowLeft />}
            onClick={() => router.back()}
            variant="outline"
          >
            Back
          </CustomButton>

          <div className={styles.titleBlock}>
            <h1 className={styles.title}>
              {`${lead.firstName || ""} ${lead.lastName || ""}`.trim() || "-"}
            </h1>
            <span className={styles.badge}>{lead.leadStatus || "New"}</span>
          </div>
          <p className={styles.subtitle}>
            {lead.companyName || "-"} • {lead.budget ? `₹${lead.budget}` : "-"}
          </p>
        </div>
        <div className={styles.headerRight}>
       
        </div>
      </div> */}

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
          {activeTab === "Overview" && <ProfileTab lead={lead} />}
          {activeTab === "Follow-ups" && <FollowUpsTab />}
          {activeTab === "Notes" && <NotesTab />}
          {activeTab === "Tasks" && <TasksTab />}
          {activeTab === "Timeline" && <TimelineTab lead={lead} />}
          {activeTab === "Quotations" && <QuotationsTab />}
          {activeTab === "Meetings" && <MeetingsTab />}
          {activeTab === "Site Visits" && <SiteVisitsTab />}
          {activeTab === "Attachments" && <AttachmentsTab />}
          {activeTab === "Activity Log" && <ActivityLogTab />}
        </div>
      </PageLayout>
    </>
  );
}
