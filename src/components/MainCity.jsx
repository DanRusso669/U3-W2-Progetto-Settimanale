import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MainCity = props => {
  const navigate = useNavigate();

  return (
    <Col className="mostSearched">
      <Card>
        <Card.Img variant="top" src={props.image} className="mostSearchedImgs" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.country}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              props.changeState(props.name);
              navigate("/details");
            }}
          >
            Check the weather
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MainCity;
