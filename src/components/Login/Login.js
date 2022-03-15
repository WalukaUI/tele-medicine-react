import "./_login.scss";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <div className="loginImage col">
        <h5>Login</h5>
        <p>Please Login to Update your appointments or profile details</p>
        <div className="formContainer">
          <div className="loginForm text-center mx-auto">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className="attribute">
          Photo by{" "}
          <a href="https://unsplash.com/@brandomakesbranding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Brando Makes Branding
          </a>{" "}
          on
          <a href="https://unsplash.com/s/photos/login?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>
    </>
  );
}
