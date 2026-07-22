import React from "react";
import ProjectDetails from "@/components/screens/projects/ProjectDetails/ProjectDetails";

export default async function Page({ params }) {
  const { id } = await params;
  return <ProjectDetails id={id} />;
}
