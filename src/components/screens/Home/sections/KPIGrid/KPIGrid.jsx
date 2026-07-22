"use client";

import React from "react";
import styles from "./KPIGrid.module.scss";
import KPICard from "../../components/KPICard/KPICard";
import { 
  Users, Building2, FolderOpen, AlertTriangle, 
  IndianRupee, TrendingDown, Clock, PackageX 
} from "lucide-react";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import { LeadContext } from "@/context/LeadContext";
import { useContext } from "react";

export default function KPIGrid() {
  const { leads } = useContext(LeadContext);
  // Compute some mock metrics from MOCK_DB and Context
  const totalLeads = leads ? leads.length : 0;
  const activeClients = MOCK_DB.clients.length;
  const activeProjects = MOCK_DB.projects.filter(p => p.status === "In Progress" || p.status === "Planning").length;
  
  // Calculate mock financials
  const revenue = MOCK_DB.projects.reduce((acc, p) => acc + (p.budget || 0), 0) * 0.4; // assume 40% collected
  const expenses = revenue * 0.65; // assume 65% expense ratio
  
  return (
    <div className={styles.kpiGrid}>
      <KPICard 
        title="Total Leads" 
        value={totalLeads} 
        icon={<Users size={20} />} 
        trend="up" 
        trendValue="12%" 
        variant="info" 
      />
      <KPICard 
        title="Active Clients" 
        value={activeClients} 
        icon={<Building2 size={20} />} 
        trend="up" 
        trendValue="5%" 
        variant="info" 
      />
      <KPICard 
        title="Active Projects" 
        value={activeProjects} 
        icon={<FolderOpen size={20} />} 
        trend="up" 
        trendValue="2" 
        period="new this week"
        variant="primary" 
      />
      <KPICard 
        title="Project Delays" 
        value="2" 
        icon={<AlertTriangle size={20} />} 
        trend="down" 
        trendValue="1" 
        variant="danger" 
      />
      <KPICard 
        title="Total Revenue (YTD)" 
        value={`₹${revenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} 
        icon={<IndianRupee size={20} />} 
        trend="up" 
        trendValue="18%" 
        variant="success" 
      />
      <KPICard 
        title="Total Expenses" 
        value={`₹${expenses.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} 
        icon={<TrendingDown size={20} />} 
        trend="up" 
        trendValue="8%" 
        variant="warning" 
      />
      <KPICard 
        title="Pending Approvals" 
        value="14" 
        icon={<Clock size={20} />} 
        trend="neutral" 
        trendValue="3" 
        period="new today"
        variant="warning" 
      />
      <KPICard 
        title="Low Stock Alerts" 
        value="8" 
        icon={<PackageX size={20} />} 
        trend="up" 
        trendValue="2" 
        variant="danger" 
      />
    </div>
  );
}
