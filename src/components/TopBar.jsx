import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopBar = function () {
  return (
    <Navbar expand="lg" className="topbar ">
      <Container>
        <Image src="https://cdn.worldvectorlogo.com/logos/react-1.svg" id="logo" />
        <Navbar.Brand className="ms-3">Weather U Like</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Nav.Link href="#link">Contacts</Nav.Link>
            <Nav.Link href="#bob">Navigate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
