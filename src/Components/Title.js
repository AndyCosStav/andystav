import React from "react";
import "../Components/Components.css";
import { Container, Row } from "react-bootstrap";

const Title = () => {
  return (
    <Container>
      <Row>
        <div className="Title">
          <h1>
            Hi<span style={{ color: "purple", fontWeight: "bold" }}>,</span> I
            <span style={{ color: "purple", fontWeight: "bold" }}>'</span>m Andy
            <span style={{ color: "purple", fontWeight: "bold" }}>.</span>
          </h1>
          <p className="introText">
            I am a <b>Fullstack Software Engineer</b> specialising in{" "}
            <b>.NET</b> and <b>React</b>.
            <br />
            I am a remote worker living in East London, but I love to travel
            when I can.
            <br />
            You should follow me on{" "}
            <span style={{ color: "purple", fontWeight: "bold" }}>
              Twitter
            </span>{" "}
            or drop me a
            <span style={{ color: "purple", fontWeight: "bold" }}>
              {" "}
              message
            </span>{" "}
            .
          </p>

          <Container fluid="sm">
            <div className="skillSet">
              <p>Technologies I use include:</p>
              <i className="devicon-csharp-plain"></i>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-typescript-plain"></i>
              <i className="devicon-nodejs-plain"></i>
              <i className="devicon-dotnetcore-plain"></i>
              <i className="devicon-react-original"></i>
              <i className="devicon-angularjs-plain"></i>
              <i className="devicon-microsoftsqlserver-plain"></i>
              <br />
              <i className="devicon-postgresql-plain"></i>
              <i className="devicon-mongodb-plain"></i>
              <i className="devicon-html5-plain"></i>
              <i className="devicon-css3-plain"></i>
              <i className="devicon-git-plain"></i>
              <i className="devicon-github-original"></i>
              <i className="devicon-bootstrap-plain"></i>
            </div>
          </Container>
          <div className="bottom">
            <h2>What I've Done</h2>
            <p>
              All my past professional exploits can be found on{" "}
              <span style={{ color: "purple", fontWeight: "bold" }}>
                Linkedin
              </span>{" "}
            </p>
            <p>
              I have a few projects on{" "}
              <span style={{ color: "purple", fontWeight: "bold" }}>
                Github
              </span>{" "}
            </p>
          </div>
        </div>
      </Row>
    </Container>
  );
};
export default Title;
