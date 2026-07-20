import React from "react";
import LeadDetails from "@/components/screens/crm/LeadDetails/LeadDetails";

export default async function LeadDetailsPage({ params }) {

  const {id} = await params

  return <LeadDetails id={id} />;
}
