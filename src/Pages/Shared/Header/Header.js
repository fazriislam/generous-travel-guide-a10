import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  
  const [user] = useAuthState(auth);
  // console.log(user);

  const handleSignOut = () => {
    signOut(auth);
    console.log('fjdsfdfs');
  }
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
              {
                user?
                <>
                {/* {user?.name} */}
                
                <button onClick={handleSignOut} >Sign out</button>
                
                </>
                :
                <>
                <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
                <Nav.Link as={Link} eventKey={2} to="/signin">
                  Sign in
                </Nav.Link>
                </>
              }



            {/* <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
                <Nav.Link as={Link} eventKey={2} to="/signin">
                  Sign in
                </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;