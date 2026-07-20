'use client'

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { LeadContext } from "@/context/LeadContext";
import styles from "./CreateLead.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Save } from "lucide-react";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import { Row } from "react-bootstrap";

// Import sections
import BasicInfoSection from "./sections/BasicInfoSection/BasicInfoSection";
import ProjectReqSection from "./sections/ProjectReqSection/ProjectReqSection";
import LeadSourceSection from "./sections/LeadSourceSection/LeadSourceSection";
import SalesInfoSection from "./sections/SalesInfoSection/SalesInfoSection";
import AdditionalInfoSection from "./sections/AdditionalInfoSection/AdditionalInfoSection";
import AttachmentsSection from "./sections/AttachmentsSection/AttachmentsSection";

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

const TEST_DATA = {
  firstName: "Jane",
  lastName: "Doe",
  mobileNumber: "+91 98765 12345",
  alternateMobileNumber: "+91 91234 56789",
  emailAddress: "jane.doe@example.com",
  whatsappNumber: "+91 98765 12345",
  leadType: "Company",
  preferredContactMethod: "WhatsApp",
  
  companyName: "Global Tech Solutions",
  industryType: "Technology",
  gstNumber: "29ABCDE1234F1Z5",
  website: "https://globaltech.example.com",
  registrationNumber: "REG-2023-987",
  annualRevenue: "15000000",
  numberOfEmployees: "120",

  serviceRequired: "Commercial Building",
  constructionType: "New Construction",
  estimatedArea: "10000",
  floors: "5",
  budget: "25000000",
  expectedStartDate: "2024-09-15",
  projectLocation: "Whitefield, Bangalore",

  doorNo: "45A",
  street: "Tech Park Road",
  area: "Whitefield",
  landmark: "Near Metro Station",
  city: "Bangalore",
  district: "Bangalore Urban",
  state: "Karnataka",
  pincode: "560066",
  googleMapLocation: "https://maps.google.com/?q=12.9698,77.7499",

  leadSource: "Website",
  sourceDetails: "Contact Us Form",
  campaignName: "Q3 B2B Marketing",
  referredBy: "John Smith",

  assignedSalesExecutive: "Rahul Verma",
  leadOwner: "Auto",
  leadPriority: "High",
  leadStatus: "New",
  expectedClosingDate: "2024-08-30",
  probability: "85",

  additionalInformation: "Client wants sustainable building materials and a modern glass facade.",

  floorPlan: null,
  sitePhotos: null,
  googleMap: null,
  propertyDocuments: null,
  referenceImages: null,
  voiceNotes: null,
  otherFiles: null,
};

// Set this flag to false to use empty data for production
const USE_TEST_DATA = true;

const CreateLeadScreen = () => {
  const router = useRouter();
  const { addLead } = useContext(LeadContext);

  const [values, setValues] = useState(USE_TEST_DATA ? TEST_DATA : EMPTY_DATA);

  const handleChange = (field, value) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving lead data:", values);
    const newId = addLead(values);
    router.push(`/crm/leads/${newId}`);
  };

  return (
    <>
      <PageHead
        title={"Create New Lead"}
        right={<CustomButton onClick={handleSave} rightIcon={<Save />}>Save</CustomButton>}
        float
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

export default CreateLeadScreen;
