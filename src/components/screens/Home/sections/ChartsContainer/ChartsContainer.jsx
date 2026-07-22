"use client";

import React, { useState, useEffect } from "react";
import styles from "./ChartsContainer.module.scss";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { MOCK_DB } from "@/constants/mockDataGenerator";

const revenueData = [
  { name: 'Jan', revenue: 400000, expenses: 240000 },
  { name: 'Feb', revenue: 300000, expenses: 139800 },
  { name: 'Mar', revenue: 500000, expenses: 380000 },
  { name: 'Apr', revenue: 478000, expenses: 390800 },
  { name: 'May', revenue: 689000, expenses: 480000 },
  { name: 'Jun', revenue: 839000, expenses: 380000 },
  { name: 'Jul', revenue: 949000, expenses: 430000 },
];

const COLORS = ['#0b57d0', '#10b981', '#f59e0b', '#ef4444'];

export default function ChartsContainer() {
  const [mounted, setMounted] = useState(false);
  const [projectStats, setProjectStats] = useState([]);

  useEffect(() => {
    setMounted(true);
    
    // Calculate Project Status Distribution
    const statusCounts = MOCK_DB.projects.reduce((acc, p) => {
      acc[p.status] = (acc[p.status] || 0) + 1;
      return acc;
    }, {});
    
    const pieData = Object.keys(statusCounts).map(key => ({
      name: key,
      value: statusCounts[key]
    }));
    
    setProjectStats(pieData);
  }, []);

  // Avoid hydration mismatch with recharts by only rendering on client
  if (!mounted) {
    return (
      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}><div className={styles.chartWrapper}>Loading...</div></div>
        <div className={styles.chartCard}><div className={styles.chartWrapper}>Loading...</div></div>
      </div>
    );
  }

  return (
    <div className={styles.chartsGrid}>
      {/* Revenue vs Expenses Chart */}
      <div className={styles.chartCard}>
        <h3>Revenue vs Expenses (YTD)</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={revenueData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0b57d0" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0b57d0" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
              <YAxis 
                tickFormatter={(value) => `₹${value / 1000}k`}
                tick={{fontSize: 12}} 
                tickLine={false} 
                axisLine={false} 
              />
              <Tooltip 
                formatter={(value) => `₹${value.toLocaleString()}`}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#0b57d0" fillOpacity={1} fill="url(#colorRev)" name="Revenue" />
              <Area type="monotone" dataKey="expenses" stroke="#ef4444" fillOpacity={1} fill="url(#colorExp)" name="Expenses" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Project Status Distribution */}
      <div className={styles.chartCard}>
        <h3>Project Status</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={projectStats}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {projectStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
