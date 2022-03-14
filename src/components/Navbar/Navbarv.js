import "./navbar.scss";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#section2">
                Telemedicine
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How to get an appointment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Imotional Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                paymnets{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Patient Education
              </a>
            </li>
          </ul>
          <button className="appointmentbtn">Book an Appointment</button>
        </div>
      </nav>
    </>
  );
}
