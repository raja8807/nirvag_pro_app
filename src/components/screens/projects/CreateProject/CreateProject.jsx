"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./CreateProject.module.scss";
import PageHead from "@/components/ui/PageHead/PageHead";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Save } from "lucide-react";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import { Row, Col } from "react-bootstrap";
import { MOCK_DB } from "@/constants/mockDataGenerator";

// Sections
import ProjectBasicInfo from "./sections/ProjectBasicInfo/ProjectBasicInfo";
import ProjectTimeline from "./sections/ProjectTimeline/ProjectTimeline";
import ProjectTeam from "./sections/ProjectTeam/ProjectTeam";
import ProjectLocation from "./sections/ProjectLocation/ProjectLocation";
import ProjectAttachments from "./sections/ProjectAttachments/ProjectAttachments";

const EMPTY_DATA = {
  name: "",
  clientId: "",
  type: "Residential",
  status: "Planning",
  priority: "Medium",
  budget: "",
  startDate: "",
  endDate: "",
  manager: "",
  engineer: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  floorPlans: null,
  agreements: null,
  approvals: null,
};

export default function CreateProject() {
  const router = useRouter();
  const [values, setValues] = useState(EMPTY_DATA);

  const handleChange = (field, value) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving project:", values);
    setTimeout(() => {
      router.push("/projects/projects");
    }, 500);
  };

  return (
    <>
      <PageHead
        title={"Create New Project"}
        right={<CustomButton onClick={handleSave} rightIcon={<Save size={16} />}>Save Project</CustomButton>}
        float
      />
      <PageLayout>
        <Row>
          <ProjectBasicInfo values={values} handleChange={handleChange} clients={MOCK_DB.clients} />
          <ProjectTimeline values={values} handleChange={handleChange} />
          <ProjectTeam values={values} handleChange={handleChange} />
          <ProjectLocation values={values} handleChange={handleChange} />
          <ProjectAttachments handleChange={handleChange} />
        </Row>
      </PageLayout>
    </>
  );
}
