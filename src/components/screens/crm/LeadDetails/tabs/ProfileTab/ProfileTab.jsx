import React from "react";
import styles from "./ProfileTab.module.scss";

const ProfileTab = ({ lead }) => {
  return (
    <>
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Calls Made</span>
          <span className={styles.metricValue}>6</span>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Meetings</span>
          <span className={styles.metricValue}>2</span>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Site Visits</span>
          <span className={styles.metricValue}>1</span>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Quotations</span>
          <span className={styles.metricValue}>3</span>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Tasks Pending</span>
          <span className={styles.metricValue}>2</span>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Days Since Created</span>
          <span className={styles.metricValue}>14</span>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Last Contacted</span>
          <span className={styles.metricValue}>Yesterday</span>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricLabel}>Status</span>
          <span className={styles.metricValue}>Negotiation</span>
        </div>
      </div>

      <div className={styles.card}>
        <h3>Contact Information</h3>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <span className={styles.label}>Lead Name</span>
            <span className={styles.value}>{`${lead.firstName || ""} ${lead.lastName || ""}`.trim() || "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Mobile Number</span>
            <span className={styles.value}>{lead.mobileNumber || "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Email Address</span>
            <span className={styles.value}>{lead.emailAddress || "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>WhatsApp Number</span>
            <span className={styles.value}>{lead.whatsappNumber || "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Preferred Contact</span>
            <span className={styles.value}>{lead.preferredContactMethod || "-"}</span>
          </div>
        </div>
      </div>

      {lead.leadType === "Company" && (
        <div className={styles.card}>
          <h3>Company Details</h3>
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <span className={styles.label}>Company Name</span>
              <span className={styles.value}>{lead.companyName || "-"}</span>
            </div>
            <div className={styles.gridItem}>
              <span className={styles.label}>Industry Type</span>
              <span className={styles.value}>{lead.industryType || "-"}</span>
            </div>
            <div className={styles.gridItem}>
              <span className={styles.label}>GST Number</span>
              <span className={styles.value}>{lead.gstNumber || "-"}</span>
            </div>
            <div className={styles.gridItem}>
              <span className={styles.label}>Website</span>
              <span className={styles.value}>{lead.website || "-"}</span>
            </div>
            <div className={styles.gridItem}>
              <span className={styles.label}>Annual Revenue</span>
              <span className={styles.value}>{lead.annualRevenue ? `₹${lead.annualRevenue}` : "-"}</span>
            </div>
            <div className={styles.gridItem}>
              <span className={styles.label}>Employees</span>
              <span className={styles.value}>{lead.numberOfEmployees || "-"}</span>
            </div>
          </div>
        </div>
      )}

      <div className={styles.card}>
        <h3>Project Requirements</h3>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <span className={styles.label}>Service Required</span>
            <span className={styles.value}>{lead.serviceRequired || "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Construction Type</span>
            <span className={styles.value}>{lead.constructionType || "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Estimated Area</span>
            <span className={styles.value}>{lead.estimatedArea ? `${lead.estimatedArea} Sq.ft` : "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Budget</span>
            <span className={styles.value}>{lead.budget ? `₹${lead.budget}` : "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Expected Start Date</span>
            <span className={styles.value}>{lead.expectedStartDate || "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Project Location</span>
            <span className={styles.value}>{lead.projectLocation || "-"}</span>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <h3>Address</h3>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <span className={styles.label}>Street</span>
            <span className={styles.value}>
              {[lead.doorNo, lead.street, lead.area].filter(Boolean).join(", ") || "-"}
            </span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>City & State</span>
            <span className={styles.value}>
              {[lead.city, lead.state, lead.pincode].filter(Boolean).join(", ") || "-"}
            </span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Landmark</span>
            <span className={styles.value}>{lead.landmark || "-"}</span>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <h3>Sales Information</h3>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <span className={styles.label}>Assigned Executive</span>
            <span className={styles.value}>{lead.assignedSalesExecutive || "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Lead Priority</span>
            <span className={styles.value}>{lead.leadPriority || "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Probability</span>
            <span className={styles.value}>{lead.probability ? `${lead.probability}%` : "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Expected Closing Date</span>
            <span className={styles.value}>{lead.expectedClosingDate || "-"}</span>
          </div>
          <div className={styles.gridItem}>
            <span className={styles.label}>Source</span>
            <span className={styles.value}>{lead.leadSource || "-"}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
