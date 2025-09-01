import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* Brand Section */}
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold">Nexora</h5>
            <p className="mb-0 small">
              Innovating the future, one step at a time.
            </p>
          </Col>

          {/* Navigation Links */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <a href="#home" className="text-light text-decoration-none mx-2">
              Home
            </a>
            <a href="#about" className="text-light text-decoration-none mx-2">
              About
            </a>
            <a href="#services" className="text-light text-decoration-none mx-2">
              Services
            </a>
            <a href="#contact" className="text-light text-decoration-none mx-2">
              Contact
            </a>
          </Col>

          {/* Social Icons */}
          <Col md={4} className="text-center text-md-end">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light mx-2">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light mx-2">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light mx-2">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light mx-2">
              <FaLinkedin size={20} />
            </a>
          </Col>
        </Row>

        <hr className="border-secondary my-3" />

        {/* Copyright */}
        <Row>
          <Col className="text-center small">
            © {currentYear} Nexora. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
