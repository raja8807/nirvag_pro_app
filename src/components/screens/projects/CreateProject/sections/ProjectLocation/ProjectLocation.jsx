import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './ProjectLocation.module.scss';

export default function ProjectLocation({ values, handleChange }) {
  return (
    <Col md={12} className={styles.sectionCard}>
      <h3>Site Location</h3>
      <Row>
        <Col md={12}>
          <div className={styles.inputGroup}>
            <label>Complete Address</label>
            <textarea 
              placeholder="Enter complete site address"
              value={values.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.inputGroup}>
            <label>City</label>
            <input 
              type="text" 
              placeholder="City"
              value={values.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.inputGroup}>
            <label>State</label>
            <input 
              type="text" 
              placeholder="State"
              value={values.state}
              onChange={(e) => handleChange("state", e.target.value)}
            />
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.inputGroup}>
            <label>Pincode</label>
            <input 
              type="text" 
              placeholder="Pincode"
              value={values.pincode}
              onChange={(e) => handleChange("pincode", e.target.value)}
            />
          </div>
        </Col>
      </Row>
    </Col>
  );
}
