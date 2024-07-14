import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import api from "../../Assets/Projects/flat-design-api-illustration.png";
import api2 from "../../Assets/Projects/flat-design-api-illustration2.png";
import webApp from "../../Assets/Projects/store-product-web.png";
import webApp2 from "../../Assets/Projects/e-commerce-web.png";
import webApp3 from "../../Assets/Projects/todo-prototype.png";
import webApp4 from "../../Assets/Projects/eazycamp-web.png";
import webApp5 from "../../Assets/Projects/activity-web.png";
import data from "../../Assets/Projects/clustering.png";
import data2 from "../../Assets/Projects/anemia-interface.png";
import data3 from "../../Assets/Projects/machine-learning.png";
import data4 from "../../Assets/Projects/machine-learning2.png";

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
              imgPath={api}
              isBlog={false}
              title="Golang Payment API"
              description="Build API for payment purpose that connect merchant, user, and bank using Go Gin framework and implement basic services including CRUD, security, relational database, and transaction"
              ghLink="https://github.com/SayyidNurCahyo/golang-payment-api"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api2}
              isBlog={false}
              title="Product Management API"
              description="Build API for manage product and product category by user using Laravel Breeze framework that implement CRUD, security, and relational database"
              ghLink="https://github.com/SayyidNurCahyo/product-management-api-laravel"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webApp}
              isBlog={false}
              title="Product Store Management Application"
              description="Build fullstack web application demo for user or admin to manage their product in store using Java Spring and React JS framework that implement CRUD, security, relational database, image uploading, and clean architecture"
              ghLink="https://github.com/SayyidNurCahyo/store-product-management"
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
              imgPath={webApp3}
              isBlog={false}
              title="Todo Prototype Web"
              description="Build todo prototype front end using React JS framework and implement React Redux Saga as CRUD state management"
              ghLink="https://github.com/SayyidNurCahyo/todo-prototype_react-js-redux-saga"
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
              imgPath={api}
              isBlog={false}
              title="Marketplace API"
              description="Build API to connect merchant, customer, and admin using Java Spring framework that Implement CRUD, JWT security, transaction, claim reward system, and unit testing"
              ghLink="https://github.com/SayyidNurCahyo/MarketPlaceAPI"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webApp5}
              isBlog={false}
              title="Activity Management Web App"
              description="Build website interface and API using Laravel 10 framework that Implement full CRUD and security login register"
              ghLink="https://github.com/SayyidNurCahyo/Activity-Management-Web-API"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="RStudio Clustering"
              description="Build clustering model to categorize data of Ministry of Health using Principal Component Analysis in RStudio"
              ghLink="https://github.com/SayyidNurCahyo/RStudio-clustering-PCA"
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
              imgPath={data4}
              isBlog={false}
              title="Weather Prediction Modelling"
              description="Build machine learning model to predict the weather based on wind condition, humidity, and many others factor using K-Fold Neural Network"
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
