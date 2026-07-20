import React from "react";
import ClientDetails from "@/components/screens/crm/ClientDetails/ClientDetails";

export default function ClientDetailsPage({ params }) {
  return <ClientDetails id={params.id} />;
}
