import "./_patientedu.scss";

export default function PatientEdu() {
  return (
    <>
      <div className="patientEdu">
        <div className="row patientEduImage">
          <div
            className="col col-md-6 col-sm-12 mx-auto divAlignCenter"
            data-aos="fade-in"
          >
            <img src="/DocPngs/namecard.png" alt="care" />
            {/* <p style={{ fontSize: "7px" }}>
              Photo by{" "}
              <a href="https://www.pexels.com/photo/man-in-white-shirt-and-man-in-black-shirt-7551686/">
                Kampus Production
              </a>{" "}
              from Pexels
            </p> */}
          </div>
          <div
            className="col col-md-6 col-sm-12mx-auto divAlignCenter"
            data-aos="fade-in"
          >
            <br />
            <br />
            <h4>Patient education</h4>
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
