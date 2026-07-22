import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './ProjectTimeline.module.scss';

export default function ProjectTimeline({ values, handleChange }) {
  return (
    <Col md={12} className={styles.sectionCard}>
      <h3>Timeline & Budget</h3>
      <Row>
        <Col md={4}>
          <div className={styles.inputGroup}>
            <label>Estimated Budget (₹) *</label>
            <input 
              type="number" 
              placeholder="e.g. 5000000"
              value={values.budget}
              onChange={(e) => handleChange("budget", e.target.value)}
            />
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.inputGroup}>
            <label>Expected Start Date</label>
            <input 
              type="date" 
              value={values.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
            />
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.inputGroup}>
            <label>Expected End Date</label>
            <input 
              type="date" 
              value={values.endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
            />
          </div>
        </Col>
      </Row>
    </Col>
  );
}
