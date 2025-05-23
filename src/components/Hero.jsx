import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Hero = ({ changeState }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    changeState(query);
    navigate("/details");
  };

  return (
    <>
      <h1 className="display-4 text-center py-3">Welcome to Weather U Like App</h1>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="searchBar mx-auto">
          <Form.Control
            className="border-1 border-success"
            placeholder="Search a City"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
          <Button type="submit" variant="outline-secondary" id="button-addon2" className="btn bg-success text-white">
            Search
          </Button>
        </InputGroup>
      </Form>
    </>
  );
};

export default Hero;
