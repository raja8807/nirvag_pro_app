"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./CreateContractor.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import { Row, Col } from "react-bootstrap";
import { Save } from "lucide-react";

export default function CreateContractor() {
  const router = useRouter();

  const handleSave = () => {
    alert("Contractor saved!");
    router.push("/workforce/contractors");
  };

  return (
    <>
      <PageHead 
        title="Register Labour Contractor" 
        right={<CustomButton onClick={handleSave} leftIcon={<Save size={16} />}>Save Contractor</CustomButton>}
        float
      />
      <PageLayout className={styles.container}>
        <Row>
          <Col md={12} className={styles.sectionCard}>
            <h3>Company Profile</h3>
            <Row>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Company Name *</label>
                  <input type="text" placeholder="e.g. Ramesh Labour Supply" />
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>Contact Person *</label>
                  <input type="text" placeholder="Name of primary contact" />
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
                  <input type="email" placeholder="contact@company.com" />
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={12} className={styles.sectionCard}>
            <h3>Legal & Compliance</h3>
            <Row>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>GST Number</label>
                  <input type="text" placeholder="15-digit GSTIN" />
                </div>
              </Col>
              <Col md={6}>
                <div className={styles.inputGroup}>
                  <label>PAN Number</label>
                  <input type="text" placeholder="10-digit PAN" />
                </div>
              </Col>
              <Col md={12}>
                <div className={styles.inputGroup}>
                  <label>Registered Address</label>
                  <textarea placeholder="Complete postal address..." rows={3} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </PageLayout>
    </>
  );
}
