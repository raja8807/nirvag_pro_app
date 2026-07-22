"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./CreateWorker.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import { Row, Col } from "react-bootstrap";
import { Save } from "lucide-react";
import { MOCK_DB } from "@/constants/mockDataGenerator";

export default function CreateWorker() {
  const router = useRouter();
  const [values, setValues] = useState({ aadhaar: "" });
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setValues(prev => ({ ...prev, [field]: value }));
    if (field === "aadhaar") setError("");
  };

  const handleSave = () => {
    if (values.aadhaar && values.aadhaar.replace(/\s/g, '').length !== 12) {
      setError("Aadhaar number must be exactly 12 digits.");
      return;
    }
    alert("Worker saved!");
    router.push("/workforce/workers");
  };

  return (
    <>
      <PageHead 
        title="Register Daily Wage Worker" 
        right={<CustomButton onClick={handleSave} leftIcon={<Save size={16} />}>Save Worker</CustomButton>}
        float
      />
      <PageLayout className={styles.container}>
        <Row>
          <Col md={12} className={styles.sectionCard}>
            <h3>Basic Profile</h3>
            <Row>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Full Name *</label>
                  <input type="text" placeholder="Worker Name" />
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
                  <label>Aadhaar Number *</label>
                  <input 
                    type="text" 
                    placeholder="12-digit Aadhaar" 
                    value={values.aadhaar}
                    onChange={(e) => handleChange("aadhaar", e.target.value)}
                  />
                  {error && <span className={styles.errorText}>{error}</span>}
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Emergency Contact</label>
                  <input type="text" placeholder="Name & Number" />
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={12} className={styles.sectionCard}>
            <h3>Trade & Pay</h3>
            <Row>
              <Col md={4}>
                <div className={styles.inputGroup}>
                  <label>Trade *</label>
                  <select>
                    <option>Mason</option>
                    <option>Carpenter</option>
                    <option>Electrician</option>
                    <option>Plumber</option>
                    <option>Helper</option>
                  </select>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.inputGroup}>
                  <label>Skill Level</label>
                  <select>
                    <option>Skilled</option>
                    <option>Semi-Skilled</option>
                    <option>Unskilled</option>
                  </select>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.inputGroup}>
                  <label>Daily Wage Rate (₹) *</label>
                  <input type="number" placeholder="e.g. 800" />
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={12} className={styles.sectionCard}>
            <h3>Assignment</h3>
            <Row>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Supply Source</label>
                  <select>
                    <option value="direct">Direct Hire (Company)</option>
                    {MOCK_DB.contractors.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Assign to Project</label>
                  <select>
                    <option value="">-- No Active Assignment --</option>
                    {MOCK_DB.projects.filter(p => p.status === 'In Progress').map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
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
