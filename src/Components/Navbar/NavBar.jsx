import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../../Assets/images/poster/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="text-light">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-success">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Link to="/home" className='text-decoration-none text-light pe-2'>Home</Link>
            <Link to="/about" className='text-decoration-none text-light pe-2'>About</Link>
            <Link to="/contact" className='text-decoration-none text-light pe-2'>Contact</Link> */}
            <Link to="/register" className="btn btn-dark me-3">
              Sign Up
            </Link>
            <Link to="/connexion" className="btn btn-light">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
