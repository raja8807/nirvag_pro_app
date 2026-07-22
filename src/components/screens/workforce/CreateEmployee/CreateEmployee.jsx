"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./CreateEmployee.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import { Row, Col } from "react-bootstrap";
import { Save } from "lucide-react";

export default function CreateEmployee() {
  const router = useRouter();
  const [values, setValues] = useState({});

  const handleChange = (field, value) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    alert("Employee saved!");
    router.push("/workforce/employees");
  };

  return (
    <>
      <PageHead 
        title="Add New Employee" 
        right={<CustomButton onClick={handleSave} leftIcon={<Save size={16} />}>Save Employee</CustomButton>}
        float
      />
      <PageLayout className={styles.container}>
        <Row>
          <Col md={12} className={styles.sectionCard}>
            <h3>Basic Information</h3>
            <Row>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>First Name *</label>
                  <input type="text" placeholder="First Name" />
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Phone Number *</label>
                  <input type="tel" placeholder="10-digit number" />
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Email Address</label>
                  <input type="email" placeholder="email@nirvag.com" />
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={12} className={styles.sectionCard}>
            <h3>Job Details</h3>
            <Row>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Employee Code *</label>
                  <input type="text" placeholder="e.g. EMP-1050" />
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Department</label>
                  <select>
                    <option>Engineering</option>
                    <option>Operations</option>
                    <option>Finance</option>
                    <option>HR</option>
                  </select>
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Designation</label>
                  <input type="text" placeholder="e.g. Project Manager" />
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Role / Permissions</label>
                  <select>
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Staff</option>
                  </select>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </PageLayout>
    </>
  );
}
