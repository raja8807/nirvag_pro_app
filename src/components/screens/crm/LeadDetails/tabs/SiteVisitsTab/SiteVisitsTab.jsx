import React, { useState } from "react";
import styles from "./SiteVisitsTab.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Plus } from "lucide-react";
import CustomModal from "@/components/ui/CustomModal/CustomModal";
import SiteVisitsList from "./components/SiteVisitsList/SiteVisitsList";
import CreateSiteVisit from "./components/CreateSiteVisit/CreateSiteVisit";

const SiteVisitsTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Site Visits</h3>
        <CustomButton onClick={openModal} leftIcon={<Plus size={16} />}>
          Schedule Visit
        </CustomButton>
      </div>

      <SiteVisitsList />

      <CustomModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Schedule Site Visit"
      >
        <CreateSiteVisit onClose={closeModal} />
      </CustomModal>
    </div>
  );
};

export default SiteVisitsTab;
