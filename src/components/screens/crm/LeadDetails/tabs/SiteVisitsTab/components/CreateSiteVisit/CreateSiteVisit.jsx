import React, { useState } from "react";
import styles from "./CreateSiteVisit.module.scss";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

const CreateSiteVisit = ({ onClose }) => {
  const [values, setValues] = useState({
    // Info
    visitNo: "SV-002",
    siteAddress: "",
    date: "",
    time: "",
    engineer: "",
    supervisor: "",
    purpose: "",
    travelDistance: "",
    travelCost: "",
    // Checklist
    checklist: {
      plotVerified: false,
      soilChecked: false,
      measurementsTaken: false,
      photosCaptured: false,
      ownerAvailable: false,
      utilitiesChecked: false,
      roadAccessChecked: false,
      nearbyBuildings: false,
    },
    // Measurements
    length: "",
    width: "",
    area: "",
    groundLevel: "",
    orientation: "",
    mapsLink: "",
    // Photos
    photos: {
      beforeConstruction: false,
      roadAccess: false,
      boundary: false,
      nearbyBuildings: false,
      electricConnection: false,
      waterConnection: false,
    },
    // Report
    report: "Customer owns a 40x60 site.\n\nSoil is suitable.\n\nWater connection available.\n\nRoad width 30 feet.\n\nConstruction can begin immediately.",
  });

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleNestedChange = (category, field, value) => {
    setValues((prev) => ({
      ...prev,
      [category]: { ...prev[category], [field]: value },
    }));
  };

  const handleSave = () => {
    console.log("Saving site visit:", values);
    onClose();
  };

  return (
    <div className={styles.container}>
      
      {/* 1. Visit Info */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Visit Information</h4>
        <div className={styles.grid}>
          <CustomInput label="Visit Number" value={values.visitNo} disabled />
          <CustomInput label="Date" type="date" value={values.date} onChange={(e) => handleChange("date", e.target.value)} />
          <div className={styles.fullWidth}>
            <CustomInput label="Site Address" value={values.siteAddress} onChange={(e) => handleChange("siteAddress", e.target.value)} />
          </div>
          <CustomInput label="Time" type="time" value={values.time} onChange={(e) => handleChange("time", e.target.value)} />
          <CustomInput label="Engineer Assigned" value={values.engineer} onChange={(e) => handleChange("engineer", e.target.value)} />
          <CustomInput label="Supervisor" value={values.supervisor} onChange={(e) => handleChange("supervisor", e.target.value)} />
          <CustomInput label="Purpose" value={values.purpose} onChange={(e) => handleChange("purpose", e.target.value)} />
          <CustomInput label="Travel Distance (km)" value={values.travelDistance} onChange={(e) => handleChange("travelDistance", e.target.value)} />
          <CustomInput label="Travel Cost (₹)" value={values.travelCost} onChange={(e) => handleChange("travelCost", e.target.value)} />
        </div>
      </div>

      {/* 2. Checklist */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Checklist</h4>
        <div className={styles.checkboxGrid}>
          {Object.keys(values.checklist).map((key) => (
            <label key={key}>
              <input
                type="checkbox"
                checked={values.checklist[key]}
                onChange={(e) => handleNestedChange("checklist", key, e.target.checked)}
              />
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </label>
          ))}
        </div>
      </div>

      {/* 3. Measurements */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Site Measurements</h4>
        <div className={styles.grid}>
          <CustomInput label="Length" value={values.length} onChange={(e) => handleChange("length", e.target.value)} />
          <CustomInput label="Width" value={values.width} onChange={(e) => handleChange("width", e.target.value)} />
          <CustomInput label="Total Area" value={values.area} onChange={(e) => handleChange("area", e.target.value)} />
          <CustomInput label="Ground Level" value={values.groundLevel} onChange={(e) => handleChange("groundLevel", e.target.value)} />
          <CustomInput label="Orientation (Facing)" value={values.orientation} onChange={(e) => handleChange("orientation", e.target.value)} />
          <CustomInput label="Google Maps Link" value={values.mapsLink} onChange={(e) => handleChange("mapsLink", e.target.value)} />
        </div>
      </div>

      {/* 4. Photos (Mock Uploads) */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Site Photos Captured</h4>
        <div className={styles.checkboxGrid}>
          {Object.keys(values.photos).map((key) => (
            <label key={key}>
              <input
                type="checkbox"
                checked={values.photos[key]}
                onChange={(e) => handleNestedChange("photos", key, e.target.checked)}
              />
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </label>
          ))}
        </div>
      </div>

      {/* 5. Report */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Site Visit Report</h4>
        <textarea 
          className={styles.richTextArea} 
          value={values.report} 
          onChange={(e) => handleChange("report", e.target.value)}
        />
      </div>

      <div className={styles.footer}>
        <CustomButton variant="outline" onClick={onClose}>
          Cancel
        </CustomButton>
        <CustomButton onClick={handleSave}>
          Save Site Visit
        </CustomButton>
      </div>
    </div>
  );
};

export default CreateSiteVisit;
