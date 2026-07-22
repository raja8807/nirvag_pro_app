/* eslint-disable react-hooks/purity */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./WorkforceDashboard.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import { MOCK_DB } from "@/constants/mockDataGenerator";
import DataTable from "@/components/ui/DataTable/DataTable";

import { 
  Users, HardHat, Truck, Activity, Wallet, 
   PieChart, BarChart3, Clock, CheckCircle, ArrowRight
} from "lucide-react";

export default function WorkforceDashboard() {
  const router = useRouter();

  const totalEmployees = MOCK_DB.employees.length;
  const totalWorkers = MOCK_DB.workers.length;
  const presentToday = Math.floor(totalWorkers * 0.92); // Mock 92% attendance
  const activeContractors = MOCK_DB.contractors.filter(c => c.status === 'Active').length;
  
  // Calculate mock daily costs based on average wage
  const avgWage = 750;
  const todaysCost = presentToday * avgWage;
  const pendingPayments = MOCK_DB.labourPayments.filter(p => p.status === 'Pending').reduce((acc, curr) => acc + curr.netPayable, 0);

  const kpis = [
    { label: "Total Employees", value: totalEmployees, icon: <Users size={20} />, color: "blue" },
    { label: "Total Workers", value: totalWorkers, icon: <HardHat size={20} />, color: "purple" },
    { label: "Present Today", value: presentToday, icon: <CheckCircle size={20} />, color: "green" },
    { label: "Active Contractors", value: activeContractors, icon: <Truck size={20} />, color: "orange" },
    { label: "Today's Labour Cost", value: `₹${todaysCost.toLocaleString()}`, icon: <Activity size={20} />, color: "red" },
    { label: "Pending Payments", value: `₹${pendingPayments.toLocaleString()}`, icon: <Wallet size={20} />, color: "gold" }
  ];

  const quickActions = [
    { label: "Add Employee", route: "/workforce/employees/create" },
    { label: "Add Worker", route: "/workforce/workers/create" },
    { label: "Add Contractor", route: "/workforce/contractors/create" },
    { label: "Mark Attendance", route: "/workforce/attendance" },
    { label: "Labour Payments", route: "/workforce/payments" },
    { label: "View Reports", route: "/workforce/reports" }
  ];

  const activities = [
    { time: "09:15", text: "Attendance marked for Villa Project" },
    { time: "09:40", text: "12 workers assigned to Villa A" },
    { time: "10:20", text: "₹25,000 labour payment recorded" },
    { time: "11:10", text: "New contractor ABC Labour added" },
    { time: "12:45", text: "Worker advance approved for WRK-6001" },
  ];

  const projectSummaryColumns = [
    { headerName: "Project", field: "name", flex: 1.5 },
    { headerName: "Workers", field: "totalWorkers", cellRenderer: p => <strong>{p.value}</strong> },
    { headerName: "Present", field: "present", cellRenderer: p => <span style={{color: '#22c55e'}}>{p.value}</span> },
    { headerName: "Productivity", field: "productivity", cellRenderer: p => `${p.value}%` },
  ];

  const projectSummaryData = MOCK_DB.projects.slice(0, 4).map(p => {
    const total = Math.floor(Math.random() * 50) + 15;
    return {
      name: p.name,
      totalWorkers: total,
      present: Math.floor(total * (Math.random() * 0.15 + 0.85)), // 85-100% attendance
      productivity: Math.floor(Math.random() * 15) + 80 // 80-95%
    }
  });

  return (
    <>
      <PageHead title="Workforce Command Center" />
      <PageLayout >
        
        {/* KPI Row */}
        <div className={styles.kpiGrid}>
          {kpis.map((kpi, idx) => (
            <div key={idx} className={`${styles.kpiCard} ${styles[kpi.color]}`}>
              <div className={styles.kpiIcon}>{kpi.icon}</div>
              <div className={styles.kpiData}>
                <span>{kpi.label}</span>
                <h3>{kpi.value}</h3>
              </div>
            </div>
          ))}
        </div>

        <br/>

        {/* Charts & Actions Grid */}
        <div className={styles.middleGrid}>
          
          <div className={styles.chartPanel}>
            <div className={styles.panelHeader}>
              <BarChart3 size={18} />
              <h3>Workers by Project Allocation</h3>
            </div>
            <div className={styles.mockBarChart}>
              {projectSummaryData.map(p => (
                <div className={styles.barRow} key={p.name}>
                  <span className={styles.barLabel}>{p.name.substring(0, 15)}...</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${(p.totalWorkers / 65) * 100}%` }}></div>
                  </div>
                  <span className={styles.barValue}>{p.totalWorkers}</span>
                </div>
              ))}
            </div>
          </div>


          <div className={styles.chartPanel}>
            <div className={styles.panelHeader}>
              <PieChart size={18} />
              <h3>Workforce by Trade</h3>
            </div>
            <div className={styles.mockBarChart}>
              {["Mason", "Carpenter", "Painter", "Helper"].map((trade, i) => {
                const vals = [45, 25, 20, 10];
                return (
                  <div className={styles.barRow} key={trade}>
                    <span className={styles.barLabel}>{trade}</span>
                    <div className={styles.barTrack}>
                      <div className={styles.barFill} style={{ width: `${vals[i]}%`, backgroundColor: 'var(--color-primary)' }}></div>
                    </div>
                    <span className={styles.barValue}>{vals[i]}%</span>
                  </div>
                )
              })}
            </div>

            
          </div>

        


          <div className={styles.quickActionsPanel}>
            <div className={styles.panelHeader}>
              <h3>Quick Actions</h3>
            </div>
            <div className={styles.actionGrid}>
              {quickActions.map(action => (
                <button 
                  key={action.label} 
                  className={styles.actionBtn}
                  onClick={() => router.push(action.route)}
                >
                  {action.label} <ArrowRight size={14} />
                </button>
              ))}
            </div>
          </div>

        </div>

        <br/>

        {/* Bottom Grid */}
        <div className={styles.bottomGrid}>
          
          <div className={styles.tablePanel}>
            <DataTable 
              title="Project Workforce Summary"
              columns={projectSummaryColumns}
              rows={projectSummaryData}
            />
          </div>

          <div className={styles.activityPanel}>
            <div className={styles.panelHeader}>
              <Clock size={18} />
              <h3>Recent Activities</h3>
            </div>
            <div className={styles.timeline}>
              {activities.map((act, i) => (
                <div className={styles.timelineItem} key={i}>
                  <div className={styles.timePoint}></div>
                  <span className={styles.time}>{act.time}</span>
                  <p className={styles.text}>{act.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </PageLayout>
    </>
  );
}
