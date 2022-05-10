import "./_telemed.scss";
import Telemed from "./telemed.jpg";

export default function TeleMed() {
  return (
    <>
      <div className="telemedImage">
        <div className="row telemed">
          <div className="col col-md-6 col-sm-12 mx-auto" data-aos="fade-in">
            <div className="parent">
              <img
                src={Telemed}
                alt="telemedicine"
                className="faded faded-all"
              />
              <div className="teleMedLayer"></div>
            </div>

            <p style={{ fontSize: "7px" }}>
              Photo by{" "}
              <a href="https://unsplash.com/@hush52?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Hush Naidoo Jade Photography
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/tele-medicine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </p>
          </div>
          <div
            className="col col-md-6 col-sm-12mx-auto teleMedList"
            data-aos="fade-in"
          >
            <h5 style={{ lineHeight: "2rem" }}>
              When you are sick and don't want to leave home we are here to
              offer affordable and convenient phone and video consultation to
              take care of your medical needs !
            </h5>
            <br />
            <h4>What are the benefits of telehealth ?</h4>
            <br />
            <ul>
              <li>🚅 Fast access to urgent care needs</li>
              <br />
              <li>🏠 No driving to a doctor's office or urgent care</li>
              <br />
              <li> 📃 Easy to fit in to your busy schedule</li>
              <br />
              <li>🩺 Prescription provided when needed</li>
              <br />
              <li>⌚ Minimal waiting time spent</li>
              <br />
              <li>
                👨‍🏫 Receive medical advice and patient education from the comfort
                of your own bed/sofa
              </li>
            </ul>
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
