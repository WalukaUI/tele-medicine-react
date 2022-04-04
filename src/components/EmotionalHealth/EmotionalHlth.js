import "./_emotional.scss";
import EmotionalImg from "./emotional.jpg";
export default function EmotionalHealth() {
  return (
    <>
      <div className="emotional">
        <div className="row emotionalImage">
          <div className="col col-md-6 col-sm-12 mx-auto" data-aos="fade-up">
            <div className="parent">
              <img src={EmotionalImg} alt="emotional" />
              <div className="emotionalLayer"></div>
            </div>
            <p style={{ fontSize: "7px" }}>
              Photo by{" "}
              <a href="https://www.pexels.com/photo/young-man-in-sleepwear-suffering-from-headache-in-morning-3771115/">
                Andrea Piacquadio
              </a>{" "}
              from Pexels
            </p>
          </div>
          <div className="col col-md-6 col-sm-12mx-auto" data-aos="fade-up">
            You are neaver alone, We are here to help you.
            <br />
          </div>
        </div>
        <div className="attribute">
          Photo by{" "}
          <a href="https://unsplash.com/@jdiegoph?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Diego PH
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/collections/9984703/emotion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>
    </>
  );
}
