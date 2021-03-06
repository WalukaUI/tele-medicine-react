import "./_signup.scss";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function Signup() {
  const [signupForm, setSignupForm] = useState({});
  const [filled, setFilled] = useState(0);

  function memberSignup(e) {
    e.preventDefault();
    let newForm = { ...signupForm, [e.target.name]: e.target.value };
    setSignupForm(newForm);
    var size = Object.values(signupForm);
    let filterValues = size.filter((e) => e !== "");
    let summ = filterValues.length * 20;
    setFilled(summ);
  }

  function handleSubmitSignup(e) {
    e.preventDefault();
    console.log(signupForm);
  }

  //form validation----------------------------------------------------------

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function sucess(e, id) {
    memberSignup(e);
    document.getElementById(id).classList.remove("invalid");
    document.getElementById(id).classList.add("valid");
  }

  function unsucess(id) {
    document.getElementById(id).classList.remove("valid");
    document.getElementById(id).classList.add("invalid");
  }

  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; // eslint-disable-line

  function validateInput(e) {
    e.preventDefault();
    let allInputs = document.querySelectorAll(".inputLine");
    for (let i = 0; i < allInputs.length; i++) {
      allInputs[i].addEventListener("input", (r) => {
        let inputString = r.target.value;
        let inputName = r.target.name;

        if (inputName === "email") {
          if (r.target.checkValidity() && validateEmail(inputString)) {
            sucess(e, "emails");
          } else {
            unsucess("emails");
          }
        } else if (inputName === "first_name" || inputName === "last_name") {
          if (r.target.checkValidity()) {
            sucess(e, inputName === "first_name" ? "fname" : "lname");
          } else {
            unsucess(inputName === "first_name" ? "fname" : "lname");
          }
        } else if (
          format.test(inputString) === true &&
          inputName === "password"
        ) {
          if (inputString.length > 8) {
            sucess(e, "pword");
          } else {
            unsucess("pword");
          }
        } else if (inputName === "password_confirmation") {
          let pwvalue = document.getElementById("pwvalue");
          if (pwvalue.value === inputString && inputString.length > 0) {
            sucess(e, "confirmpword");
          } else {
            unsucess("confirmpword");
          }
        }
      });
    }
  }

  return (
    <>
      <div className="singnupImage col" data-aos="fade-in">
        <h5>Sign Up</h5>
        <p>Please fill below form to create a new account</p>
        <div className="formContainer">
          <div className="signupForm text-center mx-auto">
            <h4
              style={{
                color:
                  filled !== 100 ? (filled < 50 ? "red" : "orange") : "green",
              }}
            >
              {filled}% Completed
            </h4>
            <form onSubmit={handleSubmitSignup}>
              <div className="col">
                <label>First Name</label>
                <div className="inputDivd">
                  <input
                    className="inputLine"
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    onChange={validateInput}
                    required
                  />
                  <span className="spans" id="fname"></span>
                </div>

                <label>Last Name</label>
                <div className="inputDivd">
                  <input
                    className="inputLine"
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    onChange={validateInput}
                    required
                  />
                  <span className="spans" id="lname"></span>
                </div>
              </div>

              <label>Email address</label>
              <div className="inputDivd">
                <input
                  className="inputLine"
                  type="email"
                  placeholder="Your email address"
                  name="email"
                  onChange={validateInput}
                  required
                />
                <span className="spans" id="emails"></span>
              </div>

              <label>Password</label>
              <div className="inputDivd">
                <input
                  className="inputLine"
                  type="password"
                  placeholder="Password"
                  id="pwvalue"
                  name="password"
                  autoComplete="on"
                  maxLength="50"
                  minLength="3"
                  onChange={validateInput}
                  required
                />
                <span className="spans" id="pword"></span>
              </div>

              <label>Confirm your Password</label>
              <div className="inputDivd">
                <input
                  className="inputLine"
                  type="password"
                  placeholder="Password Confirmation"
                  name="password_confirmation"
                  autoComplete="on"
                  maxLength="50"
                  minLength="3"
                  onChange={validateInput}
                  required
                />
                <span className="spans" id="confirmpword"></span>
              </div>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div className="attribute">
          Photo by{" "}
          <a href="https://unsplash.com/@joannakosinska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Joanna Kosinska
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/collections/1615703/swell-pre-signup?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>
    </>
  );
}
