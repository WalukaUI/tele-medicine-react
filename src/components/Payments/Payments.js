import "./_payments.scss";
import PaymentCare from "./payment-care.jpg";

export default function Payments() {
  return (
    <>
      <div className="payments">
        <div className="row paymentsImage">
          <div
            className="col col-md-6 col-sm-12 mx-auto divAlignCenter"
            data-aos="fade-in"
          >
            <img src={PaymentCare} alt="care" />
            <p style={{ fontSize: "7px" }}>
              Photo by{" "}
              <a href="https://www.pexels.com/photo/man-in-white-shirt-and-man-in-black-shirt-7551686/">
                Kampus Production
              </a>{" "}
              from Pexels
            </p>
          </div>
          <div
            className="col col-md-6 col-sm-12mx-auto divAlignCenter"
            data-aos="fade-in"
          >
            Now you can have our service as low as $25 onwards per session.
            <br />
            <br />
            <h5>
              We accept CashApp, Zelle and Debit/ credit card payment methords.
            </h5>
            <img
              src="https://www.merchantequip.com/image/?logos=v|m|a|d&height=64"
              alt="Credit Card Logos"
              style={{ width: "400px", height: "100px" }}
            />
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
