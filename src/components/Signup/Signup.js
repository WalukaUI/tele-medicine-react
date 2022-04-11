import "./_signup.scss";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function Signup() {
  const [reportForm, setReportForm] = useState({});

  function patientReport(e) {
    e.preventDefault();
    let newForm = { ...reportForm, [e.target.name]: e.target.value };
    setReportForm(newForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(reportForm);
  }

  return (
    <>
      <div className="singnupImage col" data-aos="fade-in">
        <h5>Sign Up</h5>
        <p>Please fill below form to create a new account</p>
        <div className="formContainer">
          <div className="signupForm text-center mx-auto">
            <Form onSubmit={handleSubmit}>
              <div className="col">
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    onChange={patientReport}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    onChange={patientReport}
                  />
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  name="email"
                  onChange={patientReport}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={patientReport}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm your Password</Form.Label>
                <Form.Control
                  type="passwordconfirmation"
                  placeholder="Password Confirmation"
                  name="password_confirmation"
                  onChange={patientReport}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
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
