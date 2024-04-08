import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <strong>Employee Management System</strong>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Employee
          </Nav.Link>
          <Nav.Link as={Link} to="/employee" className="nav-link">
            New Employee
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
