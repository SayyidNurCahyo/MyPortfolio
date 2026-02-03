import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webApp2 from "../../Assets/Projects/e-commerce-web.png";
import webApp4 from "../../Assets/Projects/eazycamp-web.png";
import webApp6 from "../../Assets/Projects/timesheet-management.png";
import data2 from "../../Assets/Projects/anemia-interface.png";
import data3 from "../../Assets/Projects/cnn-all.png";
import data4 from "../../Assets/Projects/covid-rfsvm.png";
import data6 from "../../Assets/Projects/weather-nn.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webApp6}
              isBlog={false}
              title="Timesheet Management & Approval Website & API"
              description="Build Timesheet management and approval website for administration purpose in company using Go Gin & Angular that include services: security & error prevention, CRUD, email confirmation and activation link, cloud image, postman collection testing, basic auth in web and generate id from token"
              ghLink="https://github.com/SayyidNurCahyo/goGin-TimesheetAPI"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webApp2}
              isBlog={false}
              title="Restaurant Management Application"
              description="Build fullstack web application for user or admin to manage their product, table in restaurant, transaction type (dine in or take away) in restaurant using Java Spring and React JS framework that implement CRUD, security, relational database, image uploading, clean architecture, midtrans payment, unit testing, and manage transaction"
              ghLink="https://github.com/SayyidNurCahyo/ReactJS-Store_Web"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webApp4}
              isBlog={false}
              title="EazyCamp Web & Mobile App"
              description="Build fullstack application for renting camping and hiking tools that connect admin, customer, and guider based on camping location using React JS, React Native, and Java Spring framework. Implement CRUD, JWT security, image uploading, cart system, unit testing, transaction and payment with Midtrans"
              ghLink="https://github.com/orgs/Thinkpad-Squad/repositories"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data2}
              isBlog={false}
              title="Anemia Checkup Modelling & Interface"
              description="Build simple Tkinter interface of anemia checkup using Support Vector Machine modelling to create accurate prediction of anemia based on their blood and healthy condition"
              ghLink="https://github.com/SayyidNurCahyo/Anemia-checkup-interface"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data3}
              isBlog={false}
              title="Acute Lymphoblastic Leukemia Classification"
              description="Build machine learning model to classify patient severity of Acute Lymphoblastic Leukemia based on their blood sample using Convolutional Neural Network with > 98% accuracy"
              ghLink="https://github.com/SayyidNurCahyo/Klasifikasi_Penyakit_Acute_Lymphoblastic_Leukemia_Using_CNN"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data4}
              isBlog={false}
              title="COVID-19 Patient Severity Classification"
              description="Build machine learning model to classify patient severity of COVID-19 based on their healthy checkup condition using model improvement of hybrid model Support Vector Machine and Random Forest + kNN imputation, case study in Airlangga University Hospital Surabaya"
              ghLink="https://github.com/SayyidNurCahyo/Klasifikasi_Keparahan_COVID_Using_Hybrid_RFSVM"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data6}
              isBlog={false}
              title="Weather Prediction Modelling"
              description="Build machine learning model to predict the weather based on wind condition, humidity, temperature, and others factor using K-Fold Cross Validation and Neural Network in Python"
              ghLink="https://github.com/SayyidNurCahyo/Weather_Prediction_Using_Kfold_Neural_Network"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
