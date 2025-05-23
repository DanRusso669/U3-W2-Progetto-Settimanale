import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MainCity = props => {
  const navigate = useNavigate();

  return (
    <Col className="mostSearched">
      <Card className=" bg-transparent border-1">
        <Card.Img variant="top" src={props.image} className="mostSearchedImgs" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text className="mb-2">{props.country}</Card.Text>
          <Button
            className="suggested"
            onClick={() => {
              navigate("/details/" + props.name);
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
