import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sharub from "../../Assets/Projects/sharub.png";
import sercom from "../../Assets/Projects/sercom.png";
import codlection from "../../Assets/Projects/codlection.png";

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
              imgPath={sharub}
              title="Sharub - Share To Save"
              description="Nền tảng chia sẻ đồ dùng không cần thiết đến cộng đồng."
              tech="Next.JS, Tailwind CSS, Firebase"
              ghLink="https://github.com/bvquoc/Sharub-BinaryBosses_GUH22"
              demoLink="https://sharub.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sercom}
              title="serCom"
              description="serCom là một nền tảng kết nối các mạnh thường quân với các cá nhân và tổ chức từ thiện, sẽ mang lại sự tiện lợi và giúp quá trình quyên góp, ủng hộ các cá nhân và tổ chức từ thiện diễn ra một cách nhanh chóng nhất mà không cần thông qua bất cứ trung gian nào khác."
              tech="Next.JS, Firebase"
              ghLink="https://github.com/bvquoc/serCom-wda2022"
              demoLink="https://sercom-wda22.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codlection}
              title="Codlection - Online Judger"
              description="Nền tảng kiểm thử, đánh giá độ chính xác, tối ưu của thuật toán."
              tech="JavaScript, Firebase"
              ghLink="https://github.com/bvquoc/codlection-client"
              demoLink="https://ci-onlinejudge.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
