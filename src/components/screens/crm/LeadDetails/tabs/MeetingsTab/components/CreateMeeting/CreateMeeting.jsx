import React, { useState } from "react";
import styles from "./CreateMeeting.module.scss";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

const CreateMeeting = ({ onClose }) => {
  const [values, setValues] = useState({
    title: "",
    type: "Online",
    date: "",
    time: "",
    duration: "",
    attendees: "",
    agenda: "",
    minutes: "",
    outcome: "",
    nextAction: "",
    status: "Scheduled",
    attachments: {
      presentation: false,
      drawings: false,
      proposal: false,
      agreement: false,
      photos: false,
    },
  });

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleAttachmentChange = (field, checked) => {
    setValues((prev) => ({
      ...prev,
      attachments: { ...prev.attachments, [field]: checked },
    }));
  };

  const handleSave = () => {
    console.log("Saving meeting:", values);
    onClose();
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.fullWidth}>
          <CustomInput
            label="Meeting Title"
            value={values.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>

        <CustomSelect
          label="Meeting Type"
          value={values.type}
          onChange={(e) => handleChange("type", e.target.value)}
          options={[
            { label: "Office" },
            { label: "Client Office" },
            { label: "Online" },
            { label: "Site" },
          ]}
        />
        <CustomSelect
          label="Meeting Status"
          value={values.status}
          onChange={(e) => handleChange("status", e.target.value)}
          options={[
            { label: "Scheduled" },
            { label: "Completed" },
            { label: "Cancelled" },
            { label: "Rescheduled" },
          ]}
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

        <CustomInput
          label="Duration"
          value={values.duration}
          onChange={(e) => handleChange("duration", e.target.value)}
          placeholder="e.g. 1 hour, 45 mins"
        />
        <CustomInput
          label="Attendees"
          value={values.attendees}
          onChange={(e) => handleChange("attendees", e.target.value)}
          placeholder="Comma separated emails or names"
        />

        <div className={styles.fullWidth}>
          <CustomInput
            label="Agenda"
            value={values.agenda}
            onChange={(e) => handleChange("agenda", e.target.value)}
          />
        </div>
        
        {values.status === "Completed" && (
          <>
            <div className={styles.fullWidth}>
              <CustomInput
                label="Minutes of Meeting"
                value={values.minutes}
                onChange={(e) => handleChange("minutes", e.target.value)}
              />
            </div>
            
            <CustomInput
              label="Outcome"
              value={values.outcome}
              onChange={(e) => handleChange("outcome", e.target.value)}
            />
            <CustomInput
              label="Next Action"
              value={values.nextAction}
              onChange={(e) => handleChange("nextAction", e.target.value)}
            />
          </>
        )}

        <div className={styles.fullWidth}>
          <span className={styles.sectionTitle}>Attachments Included</span>
          <div className={styles.checkboxGroup}>
            {Object.keys(values.attachments).map((key) => (
              <label key={key}>
                <input
                  type="checkbox"
                  checked={values.attachments[key]}
                  onChange={(e) => handleAttachmentChange(key, e.target.checked)}
                />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <CustomButton variant="outline" onClick={onClose}>
          Cancel
        </CustomButton>
        <CustomButton onClick={handleSave}>
          Save Meeting
        </CustomButton>
      </div>
    </div>
  );
};

export default CreateMeeting;
