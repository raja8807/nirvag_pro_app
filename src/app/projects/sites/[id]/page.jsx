import React from "react";
import SiteDetails from "@/components/screens/site/SiteDetails/SiteDetails";

export default async function Page({ params }) {
  const { id } = await params;
  return <SiteDetails id={id} />;
}
