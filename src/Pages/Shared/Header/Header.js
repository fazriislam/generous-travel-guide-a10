import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Home from '../../Home/Home';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home">Dream Escape Travel Agency</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
      <Nav.Link as={Link} eventKey={2} to="/signin">
        Sign in
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;