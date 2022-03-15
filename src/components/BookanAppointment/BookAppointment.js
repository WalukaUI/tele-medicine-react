import "./_bookappointment.scss";

export default function BookanAppointment() {
  return (
    <>
      <div className="bookAppoint col">
        <h5>Create a New Appointment</h5>
        <p>Please fill out the form to make a new appointment</p>
        <div className="formContainer mx-auto">
          <form style={{ textAlign: "left" }}>
            <div className="form-row row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-row row">
              <div className="form-group col-md-4">
                <label for="inputCity">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="123-456-7891"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                />
                <small style={{ color: "green" }}>Format: 123-456-7891</small>
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row row">
              <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>USA</option>
                  <option>Canada</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
            <hr />
            <div className="form-group col">
              <label for="inputZip">Is this session for an Adult</label>
              <div className="form-check col-md-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label
                  className="form-check-label"
                  for="exampleRadios1"
                  style={{ marginTop: "0" }}
                >
                  Yes
                </label>
              </div>
              <div className="form-check col-md-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label
                  className="form-check-label"
                  for="exampleRadios2"
                  style={{ marginTop: "0" }}
                >
                  No
                </label>
              </div>
            </div>
            <hr />
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>

        <div className="attribute">
          Photo by{" "}
          <a href="https://unsplash.com/@kenrickmills?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Kenrick Mills
          </a>{" "}
          on
          <a href="https://unsplash.com/collections/3282024/wellness?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </div>
      </div>
    </>
  );
}
