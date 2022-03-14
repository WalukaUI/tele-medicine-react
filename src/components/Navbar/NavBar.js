import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        style={{ fontSize: "1.3rem", color: "black" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/tele-medicine">Telemedicine</Nav.Link>
              <Nav.Link href="/our-services">Our-Services</Nav.Link>
              <Nav.Link href="/emotional-health">Emotional Health</Nav.Link>
              <Nav.Link href="#">Paymnets</Nav.Link>
              <NavDropdown title="Other" id="basic-nav-dropdown">
                <NavDropdown.Item href="/patient-education">
                  Patient Education
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Emotional Health</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  How to get an appointment
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">About Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Button className="appointmentbtn">Book an Appointment</Button>
          <Button className="btn btn-primary loginBtn">Login</Button>
        </Container>
      </Navbar>
    </>
  );
}
