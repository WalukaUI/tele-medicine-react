import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import "./_navbar.scss";

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" style={{ fontSize: "1.3rem" }} data-aos="fade-down">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav nav-bkground" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: "black" }} href="/">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "black" }} href="/tele-medicine">
                Telemedicine
              </Nav.Link>
              <Nav.Link style={{ color: "black" }} href="/our-services">
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
