import "./_patientedu.scss";

export default function PatientEdu() {
  return (
    <>
      <div className="patientEdu">
        <div className="row patientEduImage">
          <div className="col col-md-6 col-sm-12 mx-auto" data-aos="fade-in">
            {/* <img src={PaymentCare} alt="care" /> */}
            {/* <p style={{ fontSize: "7px" }}>
              Photo by{" "}
              <a href="https://www.pexels.com/photo/man-in-white-shirt-and-man-in-black-shirt-7551686/">
                Kampus Production
              </a>{" "}
              from Pexels
            </p> */}
          </div>
          <div className="col col-md-6 col-sm-12mx-auto" data-aos="fade-in">
            <br />
            <br />
            <h6>Patient education</h6>
          </div>
        </div>
        <div className="attribute">
          Photo by{" "}
          <a href="https://www.pexels.com/photo/sunlight-on-floor-62693/">
            OVAN:
          </a>
        </div>
      </div>
    </>
  );
}
