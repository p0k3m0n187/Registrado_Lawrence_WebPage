import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
      <Container>
        <Navbar.Brand href="/home">Home Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/market">Market</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/registration"><button type="button" class="btn btn-light">Register</button></Nav.Link>
            <Nav.Link href="/login"><button type="button" class="btn btn-outline-dark">Log In</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;