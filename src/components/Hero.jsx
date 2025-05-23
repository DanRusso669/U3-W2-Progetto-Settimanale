import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = ({ changeState }) => {
  return (
    <>
      <h1 className="display-4 text-center py-3">Welcome to Weather U Like App</h1>
      <InputGroup className="searchBar mx-auto">
        <Form.Control
          placeholder="Search a City"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={e => {
            changeState(e.target.value);
          }}
        />
        <Link to="/details" variant="outline-secondary" id="button-addon2" className="btn border-dark">
          Search
        </Link>
      </InputGroup>
    </>
  );
};

export default Hero;
