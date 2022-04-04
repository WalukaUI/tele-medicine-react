import "./_nav2.scss";

export default function Nav2({ location }) {
  function setColor(path) {
    if (location.pathname === path) {
      return {
        color: "red",
        borderBottomStyle: "solid",
        paddingBottom: "5px",
        width: "fit-content",
      };
    } else if (
      path === "other" &&
      (location.pathname === "/get-appointment" ||
        location.pathname === "/patient-education" ||
        location.pathname === "/emotional-health")
    ) {
      return {
        color: "red",
        borderBottomStyle: "solid",
        paddingBottom: "5px",
        width: "fit-content",
      };
    }
    return { color: "black" };
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ fontSize: "1.2rem", color: "black" }}
        data-aos="fade-down"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={setColor("/")}>
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/tele-medicine"
                  style={setColor("/tele-medicine")}
                >
                  Telemedicine
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/our-services"
                  style={setColor("/our-services")}
                >
                  Our Services
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/about-us"
                  style={setColor("/about-us")}
                >
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/payments"
                  style={setColor("/payments")}
                >
                  Payments
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="!#"
                  style={setColor("other")}
                >
                  Other
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/patient-education">
                      Patient education
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/get-appointment">
                      How to get an appointment
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/emotional-health">
                      Emotional Health
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a href="/book-an-appointment">
            <button className="btn btn-success" style={{ marginRight: "20px" }}>
              Book an Appointment
            </button>
          </a>
          <a href="/login">
            <button className="btn btn-primary">Login</button>
          </a>
        </div>
      </nav>
    </>
  );
}
