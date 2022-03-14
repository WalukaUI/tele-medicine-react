import "./_telemed.scss";
import freedom from "./free.jpg";

export default function TeleMed() {
  return (
    <>
      <div className="teleMed row">
        <div className="col col-md-6 col-sm-12 col-xs-12">
          <image src={freedom} alt="freedom" />
        </div>
        <div className="col col-md-6 col-sm-12 col-xs-12">
          <h5>
            When you are sick and don't want to leave home we are here to offer
            affordable and convenient phone and video consultation to take care
            of your medical needs !
          </h5>
        </div>
      </div>
    </>
  );
}
