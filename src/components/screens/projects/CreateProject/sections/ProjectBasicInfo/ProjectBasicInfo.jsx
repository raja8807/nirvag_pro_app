import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './ProjectBasicInfo.module.scss';

export default function ProjectBasicInfo({ values, handleChange, clients }) {
  return (
    <Col md={12} className={styles.sectionCard}>
      <h3>Basic Information</h3>
      <Row>
        <Col md={6}>
          <div className={styles.inputGroup}>
            <label>Project Name *</label>
            <input 
              type="text" 
              placeholder="e.g. ABC Villa Construction"
              value={values.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.inputGroup}>
            <label>Select Client *</label>
            <select value={values.clientId} onChange={(e) => handleChange("clientId", e.target.value)}>
              <option value="">-- Choose a Client --</option>
              {clients?.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.inputGroup}>
            <label>Project Type</label>
            <select value={values.type} onChange={(e) => handleChange("type", e.target.value)}>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Interior">Interior</option>
            </select>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.inputGroup}>
            <label>Initial Status</label>
            <select value={values.status} onChange={(e) => handleChange("status", e.target.value)}>
              <option value="Planning">Planning</option>
              <option value="Awaiting Agreement">Awaiting Agreement</option>
              <option value="Awaiting Advance">Awaiting Advance</option>
              <option value="Ready to Start">Ready to Start</option>
            </select>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.inputGroup}>
            <label>Priority</label>
            <select value={values.priority} onChange={(e) => handleChange("priority", e.target.value)}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
        </Col>
      </Row>
    </Col>
  );
}
