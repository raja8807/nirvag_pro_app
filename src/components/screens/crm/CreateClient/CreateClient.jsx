
'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./CreateClient.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Save } from "lucide-react";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import { Row } from "react-bootstrap";

// Reuse sections from CreateLead to ensure all exact same fields are present
import BasicInfoSection from "@/components/screens/crm/Leads/CreateLead/sections/BasicInfoSection/BasicInfoSection";
import ProjectReqSection from "@/components/screens/crm/Leads/CreateLead/sections/ProjectReqSection/ProjectReqSection";
import LeadSourceSection from "@/components/screens/crm/Leads/CreateLead/sections/LeadSourceSection/LeadSourceSection";
import SalesInfoSection from "@/components/screens/crm/Leads/CreateLead/sections/SalesInfoSection/SalesInfoSection";
import AdditionalInfoSection from "@/components/screens/crm/Leads/CreateLead/sections/AdditionalInfoSection/AdditionalInfoSection";
import AttachmentsSection from "@/components/screens/crm/Leads/CreateLead/sections/AttachmentsSection/AttachmentsSection";

const EMPTY_DATA = {
  // Basic Info
  firstName: "",
  lastName: "",
  mobileNumber: "",
  alternateMobileNumber: "",
  emailAddress: "",
  whatsappNumber: "",
  leadType: "Individual",
  preferredContactMethod: "",
  
  // Company Details
  companyName: "",
  industryType: "",
  gstNumber: "",
  website: "",
  registrationNumber: "",
  annualRevenue: "",
  numberOfEmployees: "",

  // Project Requirement
  serviceRequired: "",
  constructionType: "",
  estimatedArea: "",
  floors: "",
  budget: "",
  expectedStartDate: "",
  projectLocation: "",

  // Address
  doorNo: "",
  street: "",
  area: "",
  landmark: "",
  city: "",
  district: "",
  state: "",
  pincode: "",
  googleMapLocation: "",

  // Lead Source
  leadSource: "",
  sourceDetails: "",
  campaignName: "",
  referredBy: "",

  // Sales Info
  assignedSalesExecutive: "",
  leadOwner: "Auto",
  leadPriority: "Medium",
  leadStatus: "New",
  expectedClosingDate: "",
  probability: "",

  // Additional Info
  additionalInformation: "",

  // Attachments
  floorPlan: null,
  sitePhotos: null,
  googleMap: null,
  propertyDocuments: null,
  referenceImages: null,
  voiceNotes: null,
  otherFiles: null,
};

const CreateClientScreen = () => {
  const router = useRouter();

  const [values, setValues] = useState(EMPTY_DATA);

  const handleChange = (field, value) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving client data:", values);
    // Simulating API save, then returning to directory
    setTimeout(() => {
      router.push("/crm/clients");
    }, 500);
  };

  return (
    <>
      <PageHead
        title={"Create New Client"}
        right={<CustomButton onClick={handleSave} rightIcon={<Save size={16} />}>Save Client</CustomButton>}
        float
        hasBackButton
      />
      <PageLayout>
        <Row>
          <BasicInfoSection values={values} handleChange={handleChange} />
          <LeadSourceSection values={values} handleChange={handleChange} />
          <ProjectReqSection values={values} handleChange={handleChange} />
          <SalesInfoSection values={values} handleChange={handleChange} />
          <AdditionalInfoSection values={values} handleChange={handleChange} />
          <AttachmentsSection handleChange={handleChange} />
        </Row>
      </PageLayout>
    </>
  );
};

export default CreateClientScreen;
