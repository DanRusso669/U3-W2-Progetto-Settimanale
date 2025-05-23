import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Container>
    <Row className="justify-content-center text-center mainSection">
      <Col md={8}>
        <h1 className="display-2">Not Found</h1>
        <p>Ops.. It seems something went wrong!</p>

        <Link to="/">Go back to Homepage</Link>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
