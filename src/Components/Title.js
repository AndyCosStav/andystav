import React from "react";
import "../Components/Components.css";
import { Container, Row } from "react-bootstrap";

const Title = () => {
  return (
    <Container>
      <Row>
        <div className="Title">
          <h1>Hi, I'm Andy.</h1>
          <p className="introText">
            I am a Fullstack Software Engineer specialising in .NET and React
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
              <i class="devicon-csharp-plain"></i>
              <i class="devicon-javascript-plain"></i>
              <i class="devicon-typescript-plain"></i>
              <i class="devicon-nodejs-plain"></i>
              <i class="devicon-dotnetcore-plain"></i>
              <i class="devicon-react-original"></i>
              <i class="devicon-angularjs-plain"></i>
              <i class="devicon-microsoftsqlserver-plain"></i>
              <br />
              <i class="devicon-postgresql-plain"></i>
              <i class="devicon-mongodb-plain"></i>
              <i class="devicon-html5-plain"></i>
              <i class="devicon-css3-plain"></i>
              <i class="devicon-git-plain"></i>
              <i class="devicon-github-original"></i>
              <i class="devicon-bootstrap-plain"></i>
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
