import { Container, Row } from "react-bootstrap";

import Hero from "./Hero";
import MostSearched from "./MostSearched";

const Homepage = () => {
  return (
    <Container className="mainSection">
      <Hero />
      <MostSearched />
    </Container>
  );
};

export default Homepage;
