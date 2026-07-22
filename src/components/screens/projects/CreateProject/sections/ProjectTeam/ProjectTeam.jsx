import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './ProjectTeam.module.scss';

export default function ProjectTeam({ values, handleChange }) {
  return (
    <Col md={12} className={styles.sectionCard}>
      <h3>Team Assignment</h3>
      <Row>
        <Col md={6}>
          <div className={styles.inputGroup}>
            <label>Project Manager</label>
            <input 
              type="text" 
              placeholder="Assign PM name"
              value={values.manager}
              onChange={(e) => handleChange("manager", e.target.value)}
            />
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.inputGroup}>
            <label>Site Engineer</label>
            <input 
              type="text" 
              placeholder="Assign Site Engineer name"
              value={values.engineer}
              onChange={(e) => handleChange("engineer", e.target.value)}
            />
          </div>
        </Col>
      </Row>
    </Col>
  );
}
