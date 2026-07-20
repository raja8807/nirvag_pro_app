import React from "react";
import styles from "./SalesInfoSection.module.scss";
import CustomCard from "@/components/ui/CustomCard/CustomCard";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect";
import CustomFormLayout from "@/components/common/CustomFormLayout/CustomFormLayout";
import { Col } from "react-bootstrap";

const SalesInfoSection = ({ values, handleChange }) => {
  return (
    <Col xs={12} className="mt-4">
      <CustomCard head={"Sales Information"}>
        <CustomFormLayout>
          <div className="formRow">
            <CustomSelect
              label={"Assigned Sales Executive"}
              required={true}
              value={values.assignedSalesExecutive || ""}
              onChange={(e) => handleChange("assignedSalesExecutive", e.target.value)}
              options={[]}
            />
            <CustomInput
              label={"Lead Owner"}
              disabled={true}
              defaultValue={"Auto"}
            />
          </div>
          <div className="formRow">
            <CustomSelect
              label={"Lead Priority"}
              value={values.leadPriority || "Medium"}
              onChange={(e) => handleChange("leadPriority", e.target.value)}
              options={[
                { label: "Low" },
                { label: "Medium" },
                { label: "High" },
                { label: "Urgent" },
              ]}
            />
            <CustomSelect
              label={"Lead Status"}
              value={values.leadStatus || "New"}
              onChange={(e) => handleChange("leadStatus", e.target.value)}
              options={[
                { label: "New" },
                { label: "Contacted" },
                { label: "Follow-up Pending" },
                { label: "Meeting Scheduled" },
                { label: "Site Visit Scheduled" },
                { label: "Quotation Preparing" },
                { label: "Quotation Sent" },
                { label: "Negotiation" },
                { label: "Won" },
                { label: "Lost" },
                { label: "On Hold" },
                { label: "Converted to Project" },
              ]}
            />
          </div>
          <div className="formRow">
            <CustomInput
              label={"Expected Closing Date"}
              type={"date"}
              value={values.expectedClosingDate || ""}
              onChange={(e) => handleChange("expectedClosingDate", e.target.value)}
            />
            <CustomInput
              label={"Probability (%)"}
              type={"number"}
              value={values.probability || ""}
              onChange={(e) => handleChange("probability", e.target.value)}
            />
          </div>
        </CustomFormLayout>
      </CustomCard>
    </Col>
  );
};

export default SalesInfoSection;
