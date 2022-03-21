import "./_getappointment.scss";
import GetAppImage from "./getapp.jpg";
import diaryImage from "./diary.jpg";

export default function GetAppointment() {
  return (
    <>
      <div className="howtogetAppointment">
        <h4 data-aos="fade-in">How to get an appointment ? </h4>
        <div className="row howtogetapp">
          <div className="col col-md-6 col-sm-12 mx-auto" data-aos="fade-up">
            <img src={GetAppImage} alt="howtogetappointment" />
          </div>
          <div
            className="col col-md-6 col-sm-12mx-auto howToGetAppList"
            data-aos="fade-up"
          >
            <ul>
              <h5>Our criteria</h5>
              <li>
                Do not provide controlled substance prescriptions under any
                circumstance
              </li>
              <li>
                Patient care is provided to Missouri residents, except during
                the pandemic we can take care of urgent care needs
              </li>
              <li>We take care of patients above 3 years of age</li>
              <li>
                Adults with fever of less than 105 F and children with fever
                less than 103
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="row howtogetapp">
          <div
            className="col col-md-6 col-sm-12 mx-auto howToGetAppList"
            data-aos="fade-up"
          >
            <h5>To schedule an appointment follow the 3 steps:</h5>
            <ul>
              <li>
                Please fill out the quick form - this helps us to serve you
                better !
              </li>
              <li>Get an e-mail to schedule your visit</li>
              <li>
                Have your virtual medical visit from the comfort of your home
              </li>
            </ul>
          </div>
          <div className="col col-md-6 col-sm-12mx-auto" data-aos="fade-up">
            <img src={diaryImage} alt="howtogetappointment" />
          </div>
        </div>
        <div className="attribute">
          <p style={{ fontSize: "7px" }}>
            Photo by{" "}
            <a href="https://www.pexels.com/photo/organizing-calendar-and-vase-on-a-table-8580799/">
              RODNAE Productions
            </a>{" "}
            from Pexels
          </p>
          Photo by{" "}
          <a href="https://unsplash.com/@stilclassis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Marissa Grootes
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/collections/1928418/work-desk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>
    </>
  );
}
