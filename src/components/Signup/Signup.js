import "./_signup.scss";
import { Form, Button } from "react-bootstrap";
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

  function validateInput(e) {
    e.preventDefault();
    let allInputs = document.querySelectorAll(".inputLine");
    for (let i = 0; i < allInputs.length; i++) {}
    allInputs.addEventListener("input", (r) => {
      if (r.target.name === "email") {
        memberSignup(r.target.value);
      }
    });
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
            <Form onSubmit={handleSubmitSignup}>
              <div className="col">
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    className="inputLine"
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    onChange={validateInput}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    className="inputLine"
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    onChange={validateInput}
                    required
                  />
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="inputLine"
                  type="email"
                  placeholder="Your email address"
                  name="email"
                  onChange={validateInput}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="inputLine"
                  type="password"
                  placeholder="Password"
                  name="password"
                  autoComplete="on"
                  maxLength="50"
                  minLength="3"
                  onChange={validateInput}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm your Password</Form.Label>
                <Form.Control
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
              </Form.Group>
              {filled !== 100 ? (
                <Button variant="primary" type="submit" disabled>
                  Submit
                </Button>
              ) : (
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              )}
            </Form>
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
