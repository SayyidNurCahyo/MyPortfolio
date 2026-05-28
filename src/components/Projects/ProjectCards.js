import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsChevronLeft, BsChevronRight, BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <Card className="project-card-view">
      <div className="project-image">
        <Button variant="primary" onClick={() => setActiveImage(activeImage - 1)} disabled={activeImage === 0}>
          <BsChevronLeft /> &nbsp;
        </Button>
        <Card.Img variant="top" src={props.imgPath[activeImage]} alt="card-img" />
        <Button variant="primary" onClick={() => setActiveImage(activeImage + 1)} disabled={activeImage === props.imgPath.length - 1}>
          <BsChevronRight /> &nbsp;
        </Button>
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
