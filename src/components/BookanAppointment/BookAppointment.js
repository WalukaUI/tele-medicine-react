import "./_bookappointment.scss";

export default function BookanAppointment() {
  return (
    <>
      <div className="bookAppoint col">
        <h5>Create a New Appointment</h5>
        <p>Please fill out the form to make a new appointment.</p>
        <div className="appointmentformContainer mx-auto">
          <form style={{ textAlign: "left" }}>
            <div className="form-row row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="form-row row">
              <div className="form-group col-md-4">
                <label for="inputCity">Phone Number</label>
                <input
                  type="tel"
                  name="phone_number"
                  className="form-control"
                  placeholder="123-456-7891"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  required
                />
                <small style={{ color: "green" }}>Format: 123-456-7891</small>
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                name="address_line_1"
                placeholder="1234 Main St"
                required
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                name="address_line_2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row row">
              <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  required
                />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select className="form-control" name="state" required>
                  <option selected>Choose...</option>
                  <option value="">N/A</option>
                  <option value="AK">Alaska</option>
                  <option value="AL">Alabama</option>
                  <option value="AR">Arkansas</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DC">District of Columbia</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="IA">Iowa</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MD">Maryland</option>
                  <option value="ME">Maine</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MO">Missouri</option>
                  <option value="MS">Mississippi</option>
                  <option value="MT">Montana</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="NE">Nebraska</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NV">Nevada</option>
                  <option value="NY">New York</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VA">Virginia</option>
                  <option value="VT">Vermont</option>
                  <option value="WA">Washington</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WV">West Virginia</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  name="zip_code"
                  required
                />
              </div>
            </div>
            <hr />
            <div className="form-group col">
              <label for="inputZip">Is this session for an Adult?</label>
              <div className="form-check col-md-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isforanadult"
                  value="yes"
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
                  name="isforanadult"
                  value="no"
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
            <div className="form-row row">
              <label for="inputCity">Date Of Birth</label>
              <div className="form-group col-md-4">
                <input
                  type="date"
                  name="date_of_birth"
                  className="form-control"
                  pattern="[0-9]{2}"
                  required
                />
                <small style={{ color: "green" }}>
                  Format: Month/Date/Year
                </small>
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-12">
                <label for="exampleFormControlTextarea1">
                  A little about why you're registering for a telemedicine visit
                  today and some idea of your medical history.
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  name="reason_for_visit"
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-8">
                <label for="exampleFormControlTextarea1">Drug Allergies</label>
                <br />
                <small>
                  If you have no allergies, Please write NKDA <br />
                  (No Known Drug Allergies).
                </small>
                <textarea
                  className="form-control"
                  rows="3"
                  name="allergies"
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-8">
                <label for="exampleFormControlTextarea1">Medications</label>
                <br />
                <small>
                  Please write all medications you are currently taking.
                </small>
                <textarea
                  className="form-control"
                  rows="3"
                  name="medications"
                ></textarea>
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-8">
                <label for="exampleFormControlTextarea1">
                  Past Medical History
                </label>
                <br />
                <small>List all chronic conditions.</small>
                <textarea
                  className="form-control"
                  rows="3"
                  name="past_medical_history"
                ></textarea>
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-8">
                <label for="exampleFormControlTextarea1">
                  Past Surgical History
                </label>
                <textarea
                  className="form-control"
                  rows="2"
                  name="past_surgical_history"
                ></textarea>
              </div>
            </div>
            <hr />
            <div className="form-group">
              <label for="inputState">Preferred Phamercy:</label>
              <br />
              <label for="inputAddress" style={{ marginTop: "0" }}>
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="phamercy_address_line_1"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                name="phamercy_address_line_2"
                placeholder="Building Number or floor Number"
              />
            </div>
            <div className="form-row row">
              <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city_of_phamercy"
                />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select name="state_of_phamercy" className="form-control">
                  <option selected>Choose...</option>
                  <option value="">N/A</option>
                  <option value="AK">Alaska</option>
                  <option value="AL">Alabama</option>
                  <option value="AR">Arkansas</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DC">District of Columbia</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="IA">Iowa</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MD">Maryland</option>
                  <option value="ME">Maine</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MO">Missouri</option>
                  <option value="MS">Mississippi</option>
                  <option value="MT">Montana</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="NE">Nebraska</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NV">Nevada</option>
                  <option value="NY">New York</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VA">Virginia</option>
                  <option value="VT">Vermont</option>
                  <option value="WA">Washington</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WV">West Virginia</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  name="zipcode_of_phamercy"
                />
              </div>
            </div>
            <hr />
            <div className="form-group col">
              <label for="quiz">
                How would you like to pay for this service?
              </label>
              <div className="form-check col-md-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="cashapp"
                  value="cashapp"
                />
                <label
                  className="form-check-label"
                  for="exampleRadios1"
                  style={{ marginTop: "0" }}
                >
                  CashApp
                </label>
              </div>
              <div className="form-check col-md-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="zelle"
                  value="zelle"
                />
                <label
                  className="form-check-label"
                  for="exampleRadios2"
                  style={{ marginTop: "0" }}
                >
                  Zelle
                </label>
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-5">
                <label for="inputCity">Emegency Contact Number</label>
                <input
                  type="tel"
                  name="emergency_phone_number"
                  className="form-control"
                  placeholder="123-456-7891"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                />
                <small style={{ color: "green" }}>Format: 123-456-7891</small>
              </div>
            </div>
            <hr />

            <div class="form-group row fileUploadSection">
              <label for="exampleFormControlFile1">
                Upload documents related to the visit.
              </label>
              <small>File types: pdf, jpg</small>
              <input
                type="file"
                className="form-control-file"
                name="documents"
              />
            </div>

            <hr />
            <button type="submit" className="btn btn-primary">
              Submit
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
