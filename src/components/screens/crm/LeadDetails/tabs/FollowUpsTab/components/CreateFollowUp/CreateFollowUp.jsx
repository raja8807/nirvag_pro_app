import React, { useState } from "react";
import styles from "./CreateFollowUp.module.scss";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

const CreateFollowUp = ({ onClose }) => {
  const [values, setValues] = useState({
    type: "",
    date: "",
    time: "",
    reminderBefore: "",
    assignedEmployee: "",
    purpose: "",
    notes: "",
    expectedOutcome: "",
    status: "Pending",
    email: false,
    whatsapp: false,
    push: false,
  });

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field, checked) => {
    setValues((prev) => ({ ...prev, [field]: checked }));
  };

  const handleSave = () => {
    console.log("Saving follow up:", values);
    onClose();
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <CustomSelect
          label="Follow-up Type"
          value={values.type}
          onChange={(e) => handleChange("type", e.target.value)}
          options={[
            { label: "Phone Call" },
            { label: "Email" },
            { label: "Meeting" },
            { label: "Site Visit" },
            { label: "WhatsApp" },
          ]}
        />
        <CustomInput
          label="Assigned Employee"
          value={values.assignedEmployee}
          onChange={(e) => handleChange("assignedEmployee", e.target.value)}
        />
        
        <CustomInput
          label="Date"
          type="date"
          value={values.date}
          onChange={(e) => handleChange("date", e.target.value)}
        />
        <CustomInput
          label="Time"
          type="time"
          value={values.time}
          onChange={(e) => handleChange("time", e.target.value)}
        />

        <CustomSelect
          label="Reminder Before"
          value={values.reminderBefore}
          onChange={(e) => handleChange("reminderBefore", e.target.value)}
          options={[
            { label: "15 minutes" },
            { label: "30 minutes" },
            { label: "1 hour" },
            { label: "1 day" },
          ]}
        />
        <CustomSelect
          label="Follow-up Status"
          value={values.status}
          onChange={(e) => handleChange("status", e.target.value)}
          options={[
            { label: "Pending" },
            { label: "Completed" },
            { label: "Missed" },
            { label: "Rescheduled" },
            { label: "Cancelled" },
          ]}
        />

        <div className={styles.fullWidth}>
          <CustomInput
            label="Purpose"
            value={values.purpose}
            onChange={(e) => handleChange("purpose", e.target.value)}
          />
        </div>
        
        <div className={styles.fullWidth}>
          <CustomInput
            label="Expected Outcome"
            value={values.expectedOutcome}
            onChange={(e) => handleChange("expectedOutcome", e.target.value)}
          />
        </div>

        <div className={styles.fullWidth}>
          <CustomInput
            label="Notes"
            value={values.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </div>

        <div className={styles.fullWidth}>
          <span style={{ fontSize: "14px", fontWeight: "600", marginBottom: "8px", display: "block" }}>
            Reminders
          </span>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                checked={values.email}
                onChange={(e) => handleCheckboxChange("email", e.target.checked)}
              />
              Email
            </label>
            <label>
              <input
                type="checkbox"
                checked={values.push}
                onChange={(e) => handleCheckboxChange("push", e.target.checked)}
              />
              Push Notification
            </label>
            <label className={styles.disabled}>
              <input type="checkbox" disabled />
              WhatsApp (future)
            </label>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <CustomButton variant="outline" onClick={onClose}>
          Cancel
        </CustomButton>
        <CustomButton onClick={handleSave}>
          Save Follow-up
        </CustomButton>
      </div>
    </div>
  );
};

export default CreateFollowUp;
