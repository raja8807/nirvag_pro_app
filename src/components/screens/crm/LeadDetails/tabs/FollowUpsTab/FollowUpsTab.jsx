import React, { useState } from "react";
import styles from "./FollowUpsTab.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Plus } from "lucide-react";
import CustomModal from "@/components/ui/CustomModal/CustomModal";
import FollowUpsList from "./components/FollowUpsList/FollowUpsList";
import CreateFollowUp from "./components/CreateFollowUp/CreateFollowUp";

const FollowUpsTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Follow-ups</h3>
        <CustomButton onClick={openModal} leftIcon={<Plus size={16} />}>
          Create Follow-up
        </CustomButton>
      </div>

      <FollowUpsList />

      <CustomModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Create Follow-up"
      >
        <CreateFollowUp onClose={closeModal} />
      </CustomModal>
    </div>
  );
};

export default FollowUpsTab;
