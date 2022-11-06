import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../CSS/Navbartop.css";

const Navbartop = () => {
  return (
    <div>
      <Navbar className="mycont" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="logoimg"
              src="https://www.akshayapatra.org/apadmin/uploads/settings/tapf-logo-blue21dec.png"
              alt="logoimg"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <a href="#about">About Us</a>
            <a href="#work">Our Work</a>
            <a href="#reach">Our Reach</a>
            <a href="#funds">Our Funds</a>
            <a href="#involved">Get Involved</a>
            <a href="#partners">Partners</a>
            <a href="#media">Media Room</a>
            <a href="#contact us">Contact Us</a>
          </Nav>
          <button className="Navbutton">DONATE NOW</button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbartop;
