import React from "react";
import styles from "./LeadSourceSection.module.scss";
import CustomCard from "@/components/ui/CustomCard/CustomCard";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect";
import CustomFormLayout from "@/components/common/CustomFormLayout/CustomFormLayout";
import { Col } from "react-bootstrap";

const LeadSourceSection = ({ values, handleChange }) => {
  return (
    <Col xs={12} className="mt-4">
      <CustomCard head={"Lead Source"}>
        <CustomFormLayout>
          <div className="formRow">
            <CustomSelect
              label={"Lead Source"}
              required={true}
              value={values.leadSource || ""}
              onChange={(e) => handleChange("leadSource", e.target.value)}
              options={[
                { label: "Website" },
                { label: "Walk-in" },
                { label: "Phone Call" },
                { label: "Facebook" },
                { label: "Instagram" },
                { label: "Google Ads" },
                { label: "Google Search" },
                { label: "WhatsApp" },
                { label: "Existing Client" },
                { label: "Referral" },
                { label: "Broker" },
                { label: "Exhibition" },
                { label: "Newspaper" },
                { label: "JustDial" },
                { label: "IndiaMART" },
                { label: "Employee Reference" },
                { label: "Other" },
              ]}
            />
            <CustomInput
              label={"Source Details"}
              value={values.sourceDetails || ""}
              onChange={(e) => handleChange("sourceDetails", e.target.value)}
            />
          </div>
          <div className="formRow">
            <CustomInput
              label={"Campaign Name"}
              value={values.campaignName || ""}
              onChange={(e) => handleChange("campaignName", e.target.value)}
            />
            <CustomInput
              label={"Referred By"}
              value={values.referredBy || ""}
              onChange={(e) => handleChange("referredBy", e.target.value)}
            />
          </div>
        </CustomFormLayout>
      </CustomCard>
    </Col>
  );
};

export default LeadSourceSection;
