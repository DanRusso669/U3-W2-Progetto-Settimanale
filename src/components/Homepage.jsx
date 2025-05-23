import { Container, Row } from "react-bootstrap";

import Hero from "./Hero";
import MostSearched from "./MostSearched";

const Homepage = ({ changeState }) => {
  return (
    <Container className="mainSection">
      <Hero changeState={changeState} />
      <MostSearched changeState={changeState} />
    </Container>
  );
};

export default Homepage;
