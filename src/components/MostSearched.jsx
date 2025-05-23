import { Col, Row } from "react-bootstrap";
import MainCity from "./MainCity";

const MostSearched = () => {
  return (
    <>
      <h4 className="mt-5 mb-3">Most Searched Cities</h4>
      <Row xs={2} md={3} xl={6} className="gy-4 align-items-center">
        <MainCity
          name="Milan"
          image="https://images.unsplash.com/photo-1567760855784-589f09ed5dc6?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          country="Italy"
        />
        <MainCity
          name="Los Angeles"
          image="https://plus.unsplash.com/premium_photo-1697730143625-cc36da7bc150?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          country="California, USA"
        />
        <MainCity
          name="New York"
          image="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          country="New York, USA"
        />
        <MainCity
          name="Tokyo"
          image="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          country="Japan"
        />
        <MainCity
          name="Berlin"
          image="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          country="Germany"
        />
        <MainCity
          name="London"
          image="https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          country="England"
        />
      </Row>
    </>
  );
};

export default MostSearched;
