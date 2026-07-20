'use client';

import React, { createContext, useState } from "react";
import { SAMPLE_LEADS } from "@/constants/crmConstants";

export const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [leads, setLeads] = useState(SAMPLE_LEADS);

  const addLead = (newLead) => {
    const id = `LD-${Date.now()}`;
    setLeads((prev) => [...prev, { ...newLead, id }]);
    return id;
  };
  return (
    <LeadContext.Provider value={{ leads, addLead }}>
      {children}
    </LeadContext.Provider>
  );
};
