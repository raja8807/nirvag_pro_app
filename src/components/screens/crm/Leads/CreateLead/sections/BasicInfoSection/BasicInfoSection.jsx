import React from "react";
import styles from "./BasicInfoSection.module.scss";
import CustomCard from "@/components/ui/CustomCard/CustomCard";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect";
import CustomFormLayout from "@/components/common/CustomFormLayout/CustomFormLayout";
import { Col } from "react-bootstrap";

const BasicInfoSection = ({ values, handleChange, setValues }) => {
  return (
    <>
      <Col xs={12}>
        <CustomCard head={"Basic Information"}>
          <CustomFormLayout>
            <div className="formRow">
              <CustomInput
                label={"First Name"}
                value={values.firstName || ""}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
              <CustomInput
                label={"Last Name"}
                value={values.lastName || ""}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>

            <div className="formRow">
              <CustomInput
                label={"Mobile Number"}
                value={values.mobileNumber || ""}
                onChange={(e) => handleChange("mobileNumber", e.target.value)}
              />
              <CustomInput
                label={"Alternate Mobile Number"}
                value={values.alternateMobileNumber || ""}
                onChange={(e) => handleChange("alternateMobileNumber", e.target.value)}
              />
            </div>

            <div className="formRow">
              <CustomInput
                label={"Email Address"}
                value={values.emailAddress || ""}
                onChange={(e) => handleChange("emailAddress", e.target.value)}
              />
              <CustomInput
                label={"WhatsApp Number"}
                value={values.whatsappNumber || ""}
                onChange={(e) => handleChange("whatsappNumber", e.target.value)}
              />
            </div>
            
            <div className="formRow">
              <CustomSelect
                label={"Lead Type"}
                value={values.leadType || ""}
                onChange={(e) => handleChange("leadType", e.target.value)}
                options={[
                  { label: "Individual" },
                  { label: "Company" },
                ]}
              />
              <CustomSelect
                label={"Preferred Contact Method"}
                value={values.preferredContactMethod || ""}
                onChange={(e) => handleChange("preferredContactMethod", e.target.value)}
                options={[
                  { label: "Mobile" },
                  { label: "WhatsApp" },
                  { label: "Email" },
                ]}
              />
            </div>
          </CustomFormLayout>
        </CustomCard>
      </Col>

      {values.leadType === "Company" && (
        <Col xs={12} className="mt-4">
          <CustomCard head={"Company Details"}>
            <CustomFormLayout>
              <div className="formRow">
                <CustomInput
                  label={"Company Name"}
                  value={values.companyName || ""}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                />
                <CustomSelect
                  label={"Industry Type"}
                  value={values.industryType || ""}
                  onChange={(e) => handleChange("industryType", e.target.value)}
                  options={[
                    { label: "Technology" },
                    { label: "Finance" },
                    { label: "Healthcare" },
                    { label: "Real Estate" },
                    { label: "Manufacturing" },
                    { label: "Retail" },
                    { label: "Other" },
                  ]}
                />
              </div>
              <div className="formRow">
                <CustomInput
                  label={"GST Number / Tax ID"}
                  value={values.gstNumber || ""}
                  onChange={(e) => handleChange("gstNumber", e.target.value)}
                />
                <CustomInput
                  label={"Website"}
                  value={values.website || ""}
                  onChange={(e) => handleChange("website", e.target.value)}
                />
              </div>
              <div className="formRow">
                <CustomInput
                  label={"Registration Number"}
                  value={values.registrationNumber || ""}
                  onChange={(e) => handleChange("registrationNumber", e.target.value)}
                />
                <CustomInput
                  label={"Annual Revenue"}
                  value={values.annualRevenue || ""}
                  onChange={(e) => handleChange("annualRevenue", e.target.value)}
                />
              </div>
              <div className="formRow">
                <CustomInput
                  label={"Number of Employees"}
                  value={values.numberOfEmployees || ""}
                  onChange={(e) => handleChange("numberOfEmployees", e.target.value)}
                />
              </div>
            </CustomFormLayout>
          </CustomCard>
        </Col>
      )}
    </>
  );
};

export default BasicInfoSection;
