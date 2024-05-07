import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css";

const Header = () => {
  return (
    <Navbar expand="lg" fixed="top" bg="light">
      <Container class="container-fluid d-flex justify-content-between align-items-right">
        <Navbar.Brand href="#home">ni-connect</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
             <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#link">ABOUT US </Nav.Link>
          <Nav.Link href="#link">DESTINATIONS</Nav.Link>
          <Nav.Link href="#link">PACKAGES</Nav.Link>
          <Nav.Link href="#link">NEWS</Nav.Link>
          <Nav.Link href="#link">CONTACT US</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    
  </Navbar>
  );
}

export default Header