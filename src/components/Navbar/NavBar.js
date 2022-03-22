// import { useState } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import "./_navbar.scss";

export default function NavBar(activeate, makeactive) {
  return (
    <>
      <Navbar
        expand="lg"
        style={{ fontSize: "1.2rem", textAlign: "center" }}
        data-aos="fade-down"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav nav-bkground" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                style={{ color: activeate === "home" ? "red" : "black" }}
                href="/"
                onClick={() => makeactive("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{ color: activeate === "telemed" ? "red" : "black" }}
                href="/tele-medicine"
                onClick={() => makeactive("telemed")}
              >
                Telemedicine
              </Nav.Link>
              <Nav.Link
                style={{ color: activeate === "services" ? "red" : "black" }}
                href="/our-services"
                onClick={() => makeactive("services")}
              >
                Our-Services
              </Nav.Link>
              <Nav.Link style={{ color: "black" }} href="/emotional-health">
                Emotional Health
              </Nav.Link>
              <Nav.Link style={{ color: "black" }} href="/payments">
                Paymnets
              </Nav.Link>

              <NavDropdown title="Other" id="basic-nav-dropdown">
                <NavDropdown.Item
                  className="textColor"
                  href="/patient-education"
                >
                  Patient Education
                </NavDropdown.Item>
                <NavDropdown.Item className="textColor" href="/get-appointment">
                  How to get an appointment
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="textColor" href="/about-us">
                  About Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link href="/book-an-appointment">
            <Button className="appointmentbtn">Book an Appointment</Button>
          </Nav.Link>

          <Nav.Link href="/login">
            <Button className="btn btn-primary loginBtn">Login</Button>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}
