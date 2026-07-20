import React from "react";
import styles from "./ProjectReqSection.module.scss";
import CustomCard from "@/components/ui/CustomCard/CustomCard";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect";
import CustomFormLayout from "@/components/common/CustomFormLayout/CustomFormLayout";
import { Col } from "react-bootstrap";

const ProjectReqSection = ({ values, handleChange }) => {
  return (
    <>
      <Col xs={12} className="mt-4">
        <CustomCard head={"Project Requirement"}>
          <CustomFormLayout>
            <div className="formRow">
              <CustomSelect
                label={"Service Required"}
                required={true}
                value={values.serviceRequired || ""}
                onChange={(e) => handleChange("serviceRequired", e.target.value)}
                options={[
                  { label: "New House Construction" },
                  { label: "Commercial Building" },
                  { label: "Villa" },
                  { label: "Apartment" },
                  { label: "Renovation" },
                  { label: "Interior Design" },
                  { label: "Structural Work" },
                  { label: "Turnkey Project" },
                  { label: "Consultation" },
                  { label: "Other" },
                ]}
              />
              <CustomInput
                label={"Construction Type"}
                required={true}
                value={values.constructionType || ""}
                onChange={(e) => handleChange("constructionType", e.target.value)}
              />
            </div>
            <div className="formRow">
              <CustomInput
                label={"Estimated Area (Sq.ft)"}
                type={"number"}
                value={values.estimatedArea || ""}
                onChange={(e) => handleChange("estimatedArea", e.target.value)}
              />
              <CustomInput
                label={"Floors"}
                type={"number"}
                value={values.floors || ""}
                onChange={(e) => handleChange("floors", e.target.value)}
              />
            </div>
            <div className="formRow">
              <CustomInput
                label={"Budget"}
                type={"number"}
                value={values.budget || ""}
                onChange={(e) => handleChange("budget", e.target.value)}
              />
              <CustomInput
                label={"Expected Start Date"}
                type={"date"}
                value={values.expectedStartDate || ""}
                onChange={(e) => handleChange("expectedStartDate", e.target.value)}
              />
            </div>
            <div className="formRow">
              <CustomInput
                label={"Project Location"}
                value={values.projectLocation || ""}
                onChange={(e) => handleChange("projectLocation", e.target.value)}
              />
            </div>
          </CustomFormLayout>
        </CustomCard>
      </Col>
      
      <Col xs={12} className="mt-4">
        <CustomCard head={"Address"}>
          <CustomFormLayout>
            <div className="formRow">
              <CustomInput
                label={"Door No"}
                value={values.doorNo || ""}
                onChange={(e) => handleChange("doorNo", e.target.value)}
              />
              <CustomInput
                label={"Street"}
                value={values.street || ""}
                onChange={(e) => handleChange("street", e.target.value)}
              />
            </div>
            <div className="formRow">
              <CustomInput
                label={"Area"}
                value={values.area || ""}
                onChange={(e) => handleChange("area", e.target.value)}
              />
              <CustomInput
                label={"Landmark"}
                value={values.landmark || ""}
                onChange={(e) => handleChange("landmark", e.target.value)}
              />
            </div>
            <div className="formRow">
              <CustomInput
                label={"City"}
                value={values.city || ""}
                onChange={(e) => handleChange("city", e.target.value)}
              />
              <CustomInput
                label={"District"}
                value={values.district || ""}
                onChange={(e) => handleChange("district", e.target.value)}
              />
            </div>
            <div className="formRow">
              <CustomInput
                label={"State"}
                value={values.state || ""}
                onChange={(e) => handleChange("state", e.target.value)}
              />
              <CustomInput
                label={"Pincode"}
                value={values.pincode || ""}
                onChange={(e) => handleChange("pincode", e.target.value)}
              />
            </div>
            <div className="formRow">
              <CustomInput
                label={"Google Map Location"}
                value={values.googleMapLocation || ""}
                onChange={(e) => handleChange("googleMapLocation", e.target.value)}
              />
            </div>
          </CustomFormLayout>
        </CustomCard>
      </Col>
    </>
  );
};

export default ProjectReqSection;
