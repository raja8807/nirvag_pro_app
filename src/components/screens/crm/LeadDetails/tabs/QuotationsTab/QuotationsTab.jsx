import React, { useState } from "react";
import styles from "./QuotationsTab.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Plus } from "lucide-react";
import CustomModal from "@/components/ui/CustomModal/CustomModal";
import QuotationsList from "./components/QuotationsList/QuotationsList";
import CreateQuotation from "./components/CreateQuotation/CreateQuotation";

const QuotationsTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Quotations</h3>
        <CustomButton onClick={openModal} leftIcon={<Plus size={16} />}>
          Create Quotation
        </CustomButton>
      </div>

      <QuotationsList />

      <CustomModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Create Quotation"
      >
        <CreateQuotation onClose={closeModal} />
      </CustomModal>
    </div>
  );
};

export default QuotationsTab;
