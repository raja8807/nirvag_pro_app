import React, { useState } from "react";
import styles from "./CreateQuotation.module.scss";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Plus, Trash2 } from "lucide-react";

const CreateQuotation = ({ onClose }) => {
  const [details, setDetails] = useState({
    quoteNo: "QT-2026-003",
    version: "1.0",
    revisionNo: "0",
    preparedBy: "Sarah Jenkins",
    expiryDate: "",
    validity: "30 Days",
    terms: "50% Advance, 50% on Completion",
    status: "Draft",
    taxRate: 18, // percentage
    discount: 0, // fixed amount
  });

  const [items, setItems] = useState([
    { id: 1, name: "Foundation Work", qty: 1, unit: "Lumpsum", rate: 150000 },
    { id: 2, name: "Brickwork", qty: 2500, unit: "SqFt", rate: 250 },
  ]);

  const handleDetailChange = (field, value) => setDetails((prev) => ({ ...prev, [field]: value }));

  const handleItemChange = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const addItem = () => {
    setItems((prev) => [...prev, { id: Date.now(), name: "", qty: 1, unit: "Nos", rate: 0 }]);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculations
  const subTotal = items.reduce((sum, item) => sum + (item.qty * item.rate), 0);
  const taxAmount = (subTotal * details.taxRate) / 100;
  const grandTotal = subTotal + taxAmount - details.discount;

  return (
    <div className={styles.container}>
      {/* 1. Details */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Quotation Details</h4>
        <div className={styles.grid}>
          <CustomInput label="Quotation No" value={details.quoteNo} disabled />
          <CustomInput label="Version" value={details.version} disabled />
          <CustomInput label="Revision No" value={details.revisionNo} disabled />
          <CustomInput label="Prepared By" value={details.preparedBy} onChange={(e) => handleDetailChange("preparedBy", e.target.value)} />
          <CustomInput label="Expiry Date" type="date" value={details.expiryDate} onChange={(e) => handleDetailChange("expiryDate", e.target.value)} />
          <CustomInput label="Validity" value={details.validity} onChange={(e) => handleDetailChange("validity", e.target.value)} />
          <CustomSelect 
            label="Status" 
            value={details.status} 
            onChange={(e) => handleDetailChange("status", e.target.value)}
            options={[{label:"Draft"}, {label:"Pending Approval"}, {label:"Approved"}, {label:"Rejected"}]}
          />
          <div className={styles.fullWidth}>
            <CustomInput label="Terms & Conditions" value={details.terms} onChange={(e) => handleDetailChange("terms", e.target.value)} />
          </div>
        </div>
      </div>

      {/* 2. Items */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Quotation Items</h4>
        <table className={styles.itemsTable}>
          <thead>
            <tr>
              <th>Item Description</th>
              <th width="80">Qty</th>
              <th width="100">Unit</th>
              <th width="120">Rate (₹)</th>
              <th width="120">Amount (₹)</th>
              <th className={styles.actionCol}></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td><input value={item.name} onChange={(e) => handleItemChange(item.id, "name", e.target.value)} placeholder="Enter item..." /></td>
                <td><input type="number" value={item.qty} onChange={(e) => handleItemChange(item.id, "qty", Number(e.target.value))} /></td>
                <td><input value={item.unit} onChange={(e) => handleItemChange(item.id, "unit", e.target.value)} /></td>
                <td><input type="number" value={item.rate} onChange={(e) => handleItemChange(item.id, "rate", Number(e.target.value))} /></td>
                <td className={styles.amountCol}>{(item.qty * item.rate).toLocaleString()}</td>
                <td className={styles.actionCol}>
                  <button onClick={() => removeItem(item.id)}><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CustomButton variant="outline" leftIcon={<Plus size={14}/>} onClick={addItem} className={styles.addBtn}>
          Add Line Item
        </CustomButton>
      </div>

      {/* 3. Summary */}
      <div className={styles.section} style={{ alignItems: "flex-end" }}>
        <div className={styles.summaryBox}>
          <div className={styles.summaryRow}>
            <span>Sub Total:</span>
            <span>₹ {subTotal.toLocaleString()}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>GST ({details.taxRate}%):</span>
            <span>₹ {taxAmount.toLocaleString()}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Discount (Fixed):</span>
            <input 
              type="number" 
              value={details.discount} 
              onChange={(e) => handleDetailChange("discount", Number(e.target.value))} 
              style={{ width: "80px", textAlign: "right", border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </div>
          <div className={`${styles.summaryRow} ${styles.grandTotal}`}>
            <span>Grand Total:</span>
            <span>₹ {grandTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <CustomButton variant="outline" onClick={onClose}>Cancel</CustomButton>
        <CustomButton onClick={onClose}>Save Quotation</CustomButton>
      </div>
    </div>
  );
};

export default CreateQuotation;
