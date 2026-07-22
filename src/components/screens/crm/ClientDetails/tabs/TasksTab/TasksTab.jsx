import React, { useState } from "react";
import styles from "./TasksTab.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Plus } from "lucide-react";
import CustomModal from "@/components/ui/CustomModal/CustomModal";
import TasksList from "./components/TasksList/TasksList";
import CreateTask from "./components/CreateTask/CreateTask";

const TasksTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Tasks</h3>
        <CustomButton onClick={openModal} leftIcon={<Plus size={16} />}>
          Create Task
        </CustomButton>
      </div>

      <TasksList />

      <CustomModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Create Task"
      >
        <CreateTask onClose={closeModal} />
      </CustomModal>
    </div>
  );
};

export default TasksTab;
