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
      <div className={styles.overlay}>xxxx</div>
      <Row >
        <Col xs={4}>
          <CustomCard
            head={"Noe Leads"}
            rightElement={
              <Button variant="danger">xxx</Button>
            }
            leftElement={
              <CustomButton rightIcon={<PlusCircle />} variant="danger">
                Clear
              </CustomButton>
            }
          >
            xxxxx
          </CustomCard>
        </Col>
        <Col xs={4}>
          <CustomCard
            head={"Noe Leads"}
            rightElement={
              <CustomButton rightIcon={<PlusCircle />}>
                Add new Lead
              </CustomButton>
            }
            leftElement={
              <CustomButton rightIcon={<PlusCircle />} variant="danger">
                Clear
              </CustomButton>
            }
          >
            xxxxx
          </CustomCard>
        </Col>
        <Col xs={4}>
          <CustomCard
            head={"Noe Leads"}
            rightElement={
              <CustomButton rightIcon={<PlusCircle />}>
                Add new Lead
              </CustomButton>
            }
            leftElement={
              <CustomButton rightIcon={<PlusCircle />} variant="danger">
                Clear
              </CustomButton>
            }
          >
            xxxxx
          </CustomCard>
        </Col>
        <Col xs={6}>
          <CustomCard
            head={"Noe Leads"}
            rightElement={
              <CustomButton rightIcon={<PlusCircle />}>
                Add new Lead
              </CustomButton>
            }
            leftElement={
              <CustomButton rightIcon={<PlusCircle />} variant="danger">
                Clear
              </CustomButton>
            }
          >
            xxxxx
          </CustomCard>
        </Col>
        <Col xs={6}>
          <CustomCard
            head={"Noe Leads"}
            rightElement={
              <CustomButton rightIcon={<PlusCircle />}>
                Add new Lead
              </CustomButton>
            }
            leftElement={
              <CustomButton rightIcon={<PlusCircle />} variant="danger">
                Clear
              </CustomButton>
            }
          >
            xxxxx
          </CustomCard>
        </Col>
      </Row>
    </PageLayout>
   </>
  );
};

export default HomeScreen;
