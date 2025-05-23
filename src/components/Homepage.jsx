import { Row } from "react-bootstrap";
import MainCity from "./MainCity";
import Hero from "./Hero";
import MostSearched from "./MostSearched";

const Homepage = ({ changeState }) => {
  return (
    <div className="mainSection">
      <Hero changeState={changeState} />
      <MostSearched changeState={changeState} />
    </div>
  );
};

export default Homepage;
