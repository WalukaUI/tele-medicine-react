import "./_telemed.scss";
import Telemed from "./telemed.jpg";

export default function TeleMed() {
  return (
    <>
      <div className="telemedImage">
        <div className="row telemed">
          <div className="col col-md-6 col-sm-12 mx-auto">
            <img src={Telemed} alt="telemedicine" />
            <p style={{ fontSize: "7px" }}>Photo by </p>
          </div>
          <div className="col col-md-6 col-sm-12mx-auto">
            Now you can have our service as low as $25 onwards per session.
            <br />
            <br />
            <h6>
              We accept CashApp, Zelle and Debit/ credit card payment methords.
            </h6>
          </div>
        </div>
        <div className="attribute">
          Photo by{" "}
          <a href="https://www.pexels.com/photo/three-beige-yellow-and-pink-heart-marshmallows-612825/">
            Ylanite Koppens
          </a>{" "}
          from Pexels
        </div>
      </div>
    </>
  );
}
