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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
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
