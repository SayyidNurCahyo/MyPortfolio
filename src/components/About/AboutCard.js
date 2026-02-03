import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, my name is
            <span className="purple"> Sayyid Nur Cahyo Abdul Jalil, </span>
            usually called <span className="purple">Cahyo</span> from
            <span className="purple"> Kediri, East Java, Indonesia. </span>I was
            graduated from Sepuluh Nopember Institute of Technology majoring in
            statistic and have experience in fullstack web and dekstop app development. I also contributing into various project:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Creating API Services
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing Website
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing Desktop Application
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always Learning Something New"{" "}
          </p>
          <footer className="blockquote-footer">Nur Cahyo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
