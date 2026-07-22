import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './ProjectAttachments.module.scss';

export default function ProjectAttachments({ handleChange }) {
  return (
    <Col md={12} className={styles.sectionCard}>
      <h3>Project Documents & Attachments</h3>
      <Row>
        <Col md={4}>
          <div className={styles.inputGroup}>
            <label>Floor Plans & Drawings</label>
            <input 
              type="file" 
              multiple
              onChange={(e) => handleChange("floorPlans", e.target.files)}
            />
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.inputGroup}>
            <label>Signed Agreements</label>
            <input 
              type="file" 
              multiple
              onChange={(e) => handleChange("agreements", e.target.files)}
            />
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.inputGroup}>
            <label>Government Approvals</label>
            <input 
              type="file" 
              multiple
              onChange={(e) => handleChange("approvals", e.target.files)}
            />
          </div>
        </Col>
      </Row>
    </Col>
  );
}
