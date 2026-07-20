import React from "react";
import styles from "./AttachmentsSection.module.scss";
import CustomCard from "@/components/ui/CustomCard/CustomCard";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import CustomFormLayout from "@/components/common/CustomFormLayout/CustomFormLayout";
import { Col } from "react-bootstrap";

const AttachmentsSection = ({ handleChange }) => {
  return (
    <Col xs={12} className="mt-4">
      <CustomCard head={"Attachments"}>
        <CustomFormLayout>
          <div className="formRow">
            <CustomInput
              label={"Floor Plan"}
              type={"file"}
              onChange={(e) => handleChange("floorPlan", e.target.files)}
            />
            <CustomInput
              label={"Site Photos"}
              type={"file"}
              multiple
              onChange={(e) => handleChange("sitePhotos", e.target.files)}
            />
          </div>
          <div className="formRow">
            <CustomInput
              label={"Google Map"}
              type={"file"}
              onChange={(e) => handleChange("googleMap", e.target.files)}
            />
            <CustomInput
              label={"Property Documents"}
              type={"file"}
              multiple
              onChange={(e) => handleChange("propertyDocuments", e.target.files)}
            />
          </div>
          <div className="formRow">
            <CustomInput
              label={"Reference Images"}
              type={"file"}
              multiple
              onChange={(e) => handleChange("referenceImages", e.target.files)}
            />
            <CustomInput
              label={"Voice Notes"}
              type={"file"}
              multiple
              onChange={(e) => handleChange("voiceNotes", e.target.files)}
            />
          </div>
          <div className="formRow">
            <CustomInput
              label={"Other Files"}
              type={"file"}
              multiple
              onChange={(e) => handleChange("otherFiles", e.target.files)}
            />
          </div>
        </CustomFormLayout>
      </CustomCard>
    </Col>
  );
};

export default AttachmentsSection;
