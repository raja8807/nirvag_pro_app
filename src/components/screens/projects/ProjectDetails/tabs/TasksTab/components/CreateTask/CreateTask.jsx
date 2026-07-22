import React, { useState } from "react";
import styles from "./CreateTask.module.scss";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Plus, Trash2 } from "lucide-react";

const CreateTask = ({ onClose }) => {
  const [values, setValues] = useState({
    name: "",
    type: "Call Client",
    description: "",
    assignedTo: "",
    priority: "Normal",
    dueDate: "",
    reminder: "15 minutes",
    status: "Pending",
    progress: "0",
  });

  const [checklist, setChecklist] = useState([
    { id: 1, text: "Call Client", checked: false },
    { id: 2, text: "Confirm Budget", checked: false },
  ]);

  const handleChange = (field, value) => setValues((prev) => ({ ...prev, [field]: value }));

  const addChecklistItem = () => {
    setChecklist((prev) => [...prev, { id: Date.now(), text: "", checked: false }]);
  };

  const updateChecklistItem = (id, field, value) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const removeChecklistItem = (id) => {
    setChecklist((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSave = () => {
    console.log("Saving task:", values, checklist);
    onClose();
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.fullWidth}>
          <CustomInput label="Task Name" value={values.name} onChange={(e) => handleChange("name", e.target.value)} />
        </div>

        <CustomSelect
          label="Task Type"
          value={values.type}
          onChange={(e) => handleChange("type", e.target.value)}
          options={[
            { label: "Call Client" },
            { label: "Prepare Estimate" },
            { label: "Create Quotation" },
            { label: "Visit Site" },
            { label: "Collect Documents" },
            { label: "Approval" },
            { label: "Design Drawing" },
            { label: "Follow-up" },
          ]}
        />
        <CustomSelect
          label="Task Status"
          value={values.status}
          onChange={(e) => handleChange("status", e.target.value)}
          options={[
            { label: "Pending" },
            { label: "In Progress" },
            { label: "Completed" },
            { label: "Cancelled" },
            { label: "Overdue" },
          ]}
        />

        <CustomInput label="Assigned To" value={values.assignedTo} onChange={(e) => handleChange("assignedTo", e.target.value)} />
        <CustomSelect
          label="Priority"
          value={values.priority}
          onChange={(e) => handleChange("priority", e.target.value)}
          options={[{ label: "Low" }, { label: "Normal" }, { label: "High" }, { label: "Urgent" }]}
        />

        <CustomInput label="Due Date" type="date" value={values.dueDate} onChange={(e) => handleChange("dueDate", e.target.value)} />
        <CustomSelect
          label="Reminder Before"
          value={values.reminder}
          onChange={(e) => handleChange("reminder", e.target.value)}
          options={[{ label: "None" }, { label: "15 minutes" }, { label: "1 hour" }, { label: "1 day" }]}
        />

        <div className={styles.fullWidth}>
          <CustomInput label="Description" value={values.description} onChange={(e) => handleChange("description", e.target.value)} />
        </div>

        {values.status === "In Progress" && (
          <CustomInput label="Progress (%)" type="number" value={values.progress} onChange={(e) => handleChange("progress", e.target.value)} />
        )}

        <div className={styles.fullWidth}>
          <span className={styles.sectionTitle}>Checklist</span>
          <div className={styles.checklist}>
            {checklist.map((item) => (
              <div key={item.id} className={styles.checklistItem}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={(e) => updateChecklistItem(item.id, "checked", e.target.checked)}
                />
                <input
                  type="text"
                  value={item.text}
                  placeholder="Task item..."
                  onChange={(e) => updateChecklistItem(item.id, "text", e.target.value)}
                />
                <button onClick={() => removeChecklistItem(item.id)}><Trash2 size={16} /></button>
              </div>
            ))}
          </div>
          <CustomButton variant="outline" leftIcon={<Plus size={14} />} onClick={addChecklistItem} className={styles.addChecklistBtn}>
            Add Item
          </CustomButton>
        </div>
      </div>

      <div className={styles.footer}>
        <CustomButton variant="outline" onClick={onClose}>Cancel</CustomButton>
        <CustomButton onClick={handleSave}>Save Task</CustomButton>
      </div>
    </div>
  );
};

export default CreateTask;
