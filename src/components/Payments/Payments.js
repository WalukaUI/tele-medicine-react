import "./_payments.scss";
import PaymentCare from "./payment-care.jpg";

export default function Payments() {
  return (
    <>
      <div className="paymentsImage">
        <div className="row payments">
          <div className="col col-md-6 col-sm-12 mx-auto">
            <img src={PaymentCare} alt="care" />
            <p style={{ fontSize: "7px" }}>
              Photo by{" "}
              <a href="https://www.pexels.com/photo/man-in-white-shirt-and-man-in-black-shirt-7551686/">
                Kampus Production
              </a>{" "}
              from Pexels
            </p>
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
          <a href="https://unsplash.com/@blankerwahnsinn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Fabian Blank
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/collections/9544423/banking?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>
    </>
  );
}
