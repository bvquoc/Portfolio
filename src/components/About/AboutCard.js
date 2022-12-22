import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bui Vi Quoc </span>
            from <span className="purple"> Vietnam.</span>
            <br />
            I'm a student at{" "}
            <span className="purple">
              University of Information Technology - VNUHCM.
            </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing is too small to know, and nothing too big to attempt."{" "}
          </p>
          <footer className="blockquote-footer">
            ziwok's favourite quotation
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
