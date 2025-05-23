import { Container } from "react-bootstrap";

const Footer = function () {
  return (
    <footer>
      <Container id="footerCont" className="d-flex justify-content-center align-items-center text-white">
        <p>Contacts</p>
        <p>Services</p>
        <p>Send your CV</p>
        <p>Privacy Policy</p>
      </Container>
    </footer>
  );
};

export default Footer;
