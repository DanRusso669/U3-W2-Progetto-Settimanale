import { Col } from "react-bootstrap";

const SpecWeatherInfo = ({ info, infoName, unit }) => {
  return (
    <Col>
      <h5>{infoName}</h5>
      <p>
        {info}
        {unit}
      </p>
    </Col>
  );
};

export default SpecWeatherInfo;
