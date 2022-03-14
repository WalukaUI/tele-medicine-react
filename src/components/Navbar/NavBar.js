import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Telemedicine</Nav.Link>
              <Nav.Link href="#link">Our Services</Nav.Link>
              <Nav.Link href="#link">Emotional Health</Nav.Link>
              <Nav.Link href="#link">Paymnets</Nav.Link>
              <NavDropdown title="Other" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Patient Education
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Emotional Health
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  How to get an appointment
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Button className="appointmentbtn">Book an Appointment</Button>
        </Container>
      </Navbar>
    </>
  );
}
