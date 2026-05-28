import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webApp2 from "../../Assets/Projects/e-commerce-web.png";
import webApp4 from "../../Assets/Projects/eazycamp-web.png";
import webApp6 from "../../Assets/Projects/timesheet-management.png";
import webApp7 from "../../Assets/Projects/ajinomoto-web-example.png";
import webApp8 from "../../Assets/Projects/ajinomoto-desktop-example.jpeg";
import webApp9 from "../../Assets/Projects/takasago-web-example.jpeg";
import webApp10 from "../../Assets/Projects/takasago-web-example2.jpeg";
import prisma1 from "../../Assets/Projects/prisma-desktop-example.jpeg"
import prisma2 from "../../Assets/Projects/prisma-mobile-example.jpeg"
import data3 from "../../Assets/Projects/cnn-all.png";
import data4 from "../../Assets/Projects/covid-rfsvm.png";

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
              imgPath={[prisma1, prisma2]}
              isBlog={false}
              title="Multi-platform Modular Integrated Weighing App"
              description="Build integrated weighing application with modular monolith architecture that run into Desktop & Android platform. Use Vue and Tauri bundler with dynamic import & active module script to maintain modularity of feature into a single app with clean logic separation. Have server API integration, background internal API, scale & printer microservices built with Go & gomobile, responsive Tailwind UI with reusable component plugin. This app provide 3 module (until now) integration, used by many company customers and also as an internal demo app for sales"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[webApp7, webApp8]}
              isBlog={false}
              title="Ajinomoto Sajiku Weighing System"
              description="Build API, Website and Desktop Application for Sajiku Weighing System Production using Go Gin, Vue, and Tauri bundler with raw material & stock management feature, continues production in weeks, also provide websocket, printer & scale microservices. This system success to make production faster, reliable and traceable with easier stock data collection, managing 50 user concurrent daily with background queue job, easier reporting with 6 kind of report provided, also desktop integration with barcode scanner, scale & IOT module"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[webApp9, webApp10]}
              isBlog={false}
              title="Takasago Laboratory Weighing System"
              description="Build API & Website for Takasago Laboratory Weighing System using Go Gin & Vue that accomodate access from mobile app, SAP integration, websocket & scale microservices. This website success to make daily task of weighing lab easier with production synchronization with SAP, reporting into excel & pdf, and inventory management"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[webApp6]}
              isBlog={false}
              title="Timesheet Management & Approval Website & API" 
              description="Build Timesheet management and approval website for administration purpose in company using Go Gin & Angular that include services: security & error prevention, CRUD, email confirmation and activation link, cloud image, postman collection testing, basic auth in web and generate id from token"
              ghLink="https://github.com/SayyidNurCahyo/goGin-TimesheetAPI"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[webApp2]}
              isBlog={false}
              title="Restaurant Management Application"
              description="Build fullstack web application for user or admin to manage their product, table in restaurant, transaction type (dine in or take away) in restaurant using Java Spring and React JS framework that implement CRUD, security, relational database, image uploading, clean architecture, midtrans payment, unit testing, and manage transaction"
              ghLink="https://github.com/SayyidNurCahyo/ReactJS-Store_Web"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[webApp4]}
              isBlog={false}
              title="EazyCamp Web & Mobile App"
              description="Build fullstack application for renting camping and hiking tools that connect admin, customer, and guider based on camping location using React JS, React Native, and Java Spring framework. Implement CRUD, JWT security, image uploading, cart system, unit testing, transaction and payment with Midtrans"
              ghLink="https://github.com/orgs/Thinkpad-Squad/repositories"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[data3]}
              isBlog={false}
              title="Acute Lymphoblastic Leukemia Classification"
              description="Build machine learning model to classify patient severity of Acute Lymphoblastic Leukemia based on their blood sample using Convolutional Neural Network with > 98% accuracy"
              ghLink="https://github.com/SayyidNurCahyo/Klasifikasi_Penyakit_Acute_Lymphoblastic_Leukemia_Using_CNN"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[data4]}
              isBlog={false}
              title="COVID-19 Patient Severity Classification"
              description="Build machine learning model to classify patient severity of COVID-19 based on their healthy checkup condition using model improvement of hybrid model Support Vector Machine and Random Forest + kNN imputation, case study in Airlangga University Hospital Surabaya"
              ghLink="https://github.com/SayyidNurCahyo/Klasifikasi_Keparahan_COVID_Using_Hybrid_RFSVM"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
