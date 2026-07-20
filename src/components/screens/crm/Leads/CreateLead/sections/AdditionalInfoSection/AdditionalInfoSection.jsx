import React from "react";
import styles from "./AdditionalInfoSection.module.scss";
import CustomCard from "@/components/ui/CustomCard/CustomCard";
import CustomTextArea from "@/components/ui/CustomTextArea/CustomTextArea";
import CustomFormLayout from "@/components/common/CustomFormLayout/CustomFormLayout";
import { Col } from "react-bootstrap";

const AdditionalInfoSection = ({ values, handleChange }) => {
  return (
    <Col xs={12} className="mt-4">
      <CustomCard head={"Additional Information"}>
        <CustomFormLayout>
          <div>
            <CustomTextArea
              label={"Additional Notes"}
              value={values.additionalInformation || ""}
              onChange={(e) => handleChange("additionalInformation", e.target.value)}
              rows={4}
            />
          </div>
        </CustomFormLayout>
      </CustomCard>
    </Col>
  );
};

export default AdditionalInfoSection;
