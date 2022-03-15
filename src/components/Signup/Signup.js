import "./_signup.scss";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <>
      <div className="singnupImage col">
        <h5>Sign Up</h5>
        <p>Please fill below form to create a new account</p>
        <div className="formContainer">
          <div className="signupForm text-center mx-auto">
            <Form>
              <div className="row">
                <Form.Group className="mb-3 col-md-6">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your email address" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm your Password</Form.Label>
                <Form.Control
                  type="passwordconfirmation"
                  placeholder="Password Confirmation"
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
