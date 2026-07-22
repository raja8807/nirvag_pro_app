import React from "react";
import ClientDetails from "@/components/screens/crm/ClientDetails/ClientDetails";

export default async function ClientDetailsPage({ params }) {

  const {id} = await params

  return <ClientDetails id={id} />;
}
