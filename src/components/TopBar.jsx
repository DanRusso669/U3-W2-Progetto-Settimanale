import { Container, Image, Nav, Navbar } from "react-bootstrap";

const TopBar = function () {
  return (
    <Navbar expand="lg" bg="info">
      <Container>
        <Image src="https://cdn.worldvectorlogo.com/logos/react-1.svg" id="logo" />
        <Navbar.Brand href="#home" className="ms-3">
          Weather U Like{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contacts</Nav.Link>
            <Nav.Link href="#bob">Navigate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
