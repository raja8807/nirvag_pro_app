import React from "react";
import styles from "./Home.module.scss";
import CustomCard from "@/components/ui/CustomCard/CustomCard";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { PlusCircle } from "lucide-react";
import { Button, Col, Row } from "react-bootstrap";
import PageLayout from "@/components/ui/PageLayout/PageLayout";
import PageHead from "@/components/ui/PageHead/PageHead";

const HomeScreen = () => {
  return (
   <>
   <PageHead/>
    <PageLayout className={styles.HomeScreen}>
      <div className={styles.overlay}>Home</div>
   
    </PageLayout>
   </>
  );
};

export default HomeScreen;
