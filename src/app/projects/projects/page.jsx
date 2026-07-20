"use client";

import React from "react";
import DataTable from "@/components/ui/DataTable/DataTable";

const ProjectsPage = () => {
  const columns = [
    {
      headerName: "Product",
      field: "product",
      minWidth: 320,
    },
    {
      headerName: "Status",
      field: "status",
      minWidth: 120,
    },
    {
      headerName: "Inventory",
      field: "inventory",
      minWidth: 220,
    },
    {
      headerName: "Sales channels",
      field: "salesChannels",
      minWidth: 140,
    },
    {
      headerName: "Markets",
      field: "markets",
      minWidth: 100,
    },
    {
      headerName: "Category",
      field: "category",
      minWidth: 180,
    },
    {
      headerName: "Vendor",
      field: "vendor",
      minWidth: 150,
    },
  ];



  const rows = [
    {
        id:'xx',
      product: "(Sample) Coconut Bar Soap",
    //   status: "Active xx",
      inventory: "0 in stock",
      salesChannels: 1,
      markets: 2,
      category: "",
      vendor: "My Store",
      image: "https://placehold.co/40x40/d1d5db/4b5563?text=Soap",
    },
    {
      product: "Copy of Custom Notebook",
      status: "Draft",
      inventory: "0 in stock for 24 variants",
      salesChannels: 3,
      markets: 2,
      category: "Notebooks & Notepads",
      vendor: "My Store",
      image: "https://placehold.co/40x40/d1d5db/4b5563?text=Note",
    },
    {
      product: "Custom handcrafted mug",
      status: "Active",
      inventory: "Inventory not tracked",
      salesChannels: 3,
      markets: 2,
      category: "Mug",
      vendor: "JS Mob",
      image: "https://placehold.co/40x40/d1d5db/4b5563?text=Mug",
    },
    {
      product: "Custom Notebook",
      status: "Active",
      inventory: "5 in stock for 24 variants",
      salesChannels: 3,
      markets: 2,
      category: "Notebooks & Notepads",
      vendor: "My Store",
      image: "https://placehold.co/40x40/d1d5db/4b5563?text=Note",
    },
    {
      product: "Example Hat",
      status: "Archived",
      inventory: "Inventory not tracked",
      salesChannels: 2,
      markets: 2,
      category: "Clothing",
      vendor: "JS Mob",
      image: "https://placehold.co/40x40/d1d5db/4b5563?text=Hat",
    },
    {
      product: "Example Pants",
      status: "Draft",
      inventory: "Inventory not tracked",
      salesChannels: 2,
      markets: 2,
      category: "Clothing",
      vendor: "JS Mob",
      image: "https://placehold.co/40x40/d1d5db/4b5563?text=Pants",
    },
  ];

  return (
    <div >
      <DataTable
        title="Products"
        columns={columns}
        rows={rows}
        searchable
        selectable
        exportable
        refreshable
        columnChooser
        densitySelector
        pageSize={20}
        onRowClicked={(e)=>{
            console.log(e.data);
            
        }}
        addButton={{
          label: "New Product",
          onClick: ()=>{},
        }}
        actions={[
          {
            label: "Delete",
            onClick: ()=>{},
          },
        ]}
      />
    </div>
  );
};

export default ProjectsPage;
