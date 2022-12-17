import "../Components/Components.css";
import { Container, Row } from "react-bootstrap";

const Whatsthehapps = () => {
  return (
    <Container>
      <Row>
        <h1 className="Title">Whats the happs?</h1>
        <div className="introText">
          <p>So, you've stumbled across my website...</p>
          <p>
            This website serves to act as a playground sandbox for me to try out
            new tech im learning.
          </p>
          <p>
            This was build using React and javascript, deployed using aws and
            cloudfront.
          </p>
          <p>A few things I plan to do:</p>
          <ul>
            <li>
              Refactor and restyle this site...once I come up with something
              that resemles a personal brand....
            </li>
            <li>build a chat app using react and .net</li>
            <li>convert this site into a cms</li>
            <li>
              use this site to test out the automation skills i've been learning
            </li>
            <li>machine learning...thats popular right?</li>
            <li>Tutorials and blogs!</li>
          </ul>
        </div>
      </Row>
    </Container>
  );
};

export default Whatsthehapps;
