import "./_aboutus.scss";
import Free from "./free.jpg";
export default function AboutUs() {
  return (
    <>
      <div className="aboutUs">
        <div className="row aboutUsImage">
          <div
            className="col col-md-6 col-sm-12 mx-auto divAlignCenter"
            data-aos="fade-in"
          >
            <img src={Free} alt="care" />
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
            When you are sick and don't want to leave home we are here to offer
            affordable and convenient phone and video consultation to take care
            of your medical needs !
          </div>
        </div>
        <div className="attribute">
          {/* Photo by{" "}
          <a href="https://unsplash.com/@blankerwahnsinn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Fabian Blank
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/collections/9544423/banking?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a> */}
        </div>
      </div>
    </>
  );
}
