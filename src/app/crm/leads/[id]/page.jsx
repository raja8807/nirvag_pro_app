import React from "react";
import LeadDetails from "@/components/screens/crm/LeadDetails/LeadDetails";

export default function LeadDetailsPage({ params }) {
  return <LeadDetails id={params.id} />;
}
