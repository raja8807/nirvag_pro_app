import React, { useState } from "react";
import styles from "./MeetingsTab.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Plus } from "lucide-react";
import CustomModal from "@/components/ui/CustomModal/CustomModal";
import MeetingsList from "./components/MeetingsList/MeetingsList";
import CreateMeeting from "./components/CreateMeeting/CreateMeeting";

const MeetingsTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Meetings</h3>
        <CustomButton onClick={openModal} leftIcon={<Plus size={16} />}>
          Schedule Meeting
        </CustomButton>
      </div>

      <MeetingsList />

      <CustomModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Schedule Meeting"
      >
        <CreateMeeting onClose={closeModal} />
      </CustomModal>
    </div>
  );
};

export default MeetingsTab;
