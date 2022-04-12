import { useState } from "react";
import "./_bookappointment.scss";

export default function BookanAppointment() {
  const [patientForm, setPatientForm] = useState({});
  const [filledPercentage, setFilledPercentage] = useState(0);

  function createPatientForm(e) {
    e.preventDefault();
    let finalForm = { ...patientForm, [e.target.name]: e.target.value };
    setPatientForm(finalForm);
    var objSize = Object.entries(finalForm);
    let filteredValues = objSize.filter(
      (e) =>
        e[1] !== "" &&
        e[0] !== "address_line_2" &&
        e[0] !== "phamercy_address_line_2" &&
        e[0] !== "past_surgical_history"
    );
    let sumofFiileLines = filteredValues.length * 5;
    setFilledPercentage(sumofFiileLines);
  }

  function patientFormSubmit(e) {
    e.preventDefault();
    console.log(patientForm);
  }

  return (
    <>
      <div className="bookAppoint col">
        <div className="progressBar">
          {filledPercentage === 0 ? (
            <h5>Create a New Appointment</h5>
          ) : (
            <h4
              style={{
                color:
                  filledPercentage !== 100
                    ? filledPercentage < 50
                      ? "red"
                      : "orange"
                    : "green",
              }}
            >
              {filledPercentage}% Completed
            </h4>
          )}
        </div>
        <p>Please fill out the form to make a new appointment.</p>
        <div className="appointmentformContainer mx-auto">
          <form style={{ textAlign: "left" }} onSubmit={patientFormSubmit}>
            <div className="form-row row" data-aos="fade-up">
              <div className="form-group col-md-6">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="First Name"
                  onChange={createPatientForm}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Last Name"
                  onChange={createPatientForm}
                  required
                />
              </div>
            </div>
            <div className="form-group" data-aos="fade-up">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="name@example.com"
                onChange={createPatientForm}
                required
              />
            </div>
            <div className="form-row row" data-aos="fade-up">
              <div className="form-group col-md-4">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone_number"
                  className="form-control"
                  placeholder="123-456-7891"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  onChange={createPatientForm}
                  required
                />
                <small style={{ color: "green" }}>Format: 123-456-7891</small>
              </div>
            </div>
            <div className="form-group" data-aos="fade-up">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                name="address_line_1"
                placeholder="1234 Main St"
                onChange={createPatientForm}
                required
              />
            </div>
            <div className="form-group" data-aos="fade-up">
              <label>Address 2</label>
              <input
                type="text"
                className="form-control"
                name="address_line_2"
                placeholder="Apartment, studio, or floor"
                onChange={createPatientForm}
              />
            </div>
            <div className="form-row row" data-aos="fade-up">
              <div className="form-group col-md-6">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  onChange={createPatientForm}
                  required
                />
              </div>
              <div className="form-group col-md-4" data-aos="fade-up">
                <label>State</label>
                <select
                  className="form-control"
                  name="state"
                  onChange={createPatientForm}
                  required
                >
                  <option defaultValue>Choose...</option>
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
              <div className="form-group col-md-2" data-aos="fade-up">
                <label>Zip</label>
                <input
                  type="zip"
                  className="form-control"
                  name="zip_code"
                  onChange={createPatientForm}
                  required
                />
              </div>
            </div>
            <hr data-aos="fade-up" />
            <div className="form-group col" data-aos="fade-up">
              <label>Is this session for an Adult?</label>
              <div className="form-check col-md-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isforanadult"
                  onChange={createPatientForm}
                  value="yes"
                />
                <label className="form-check-label" style={{ marginTop: "0" }}>
                  Yes
                </label>
              </div>
              <div className="form-check col-md-2" data-aos="fade-up">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isforanadult"
                  onChange={createPatientForm}
                  value="no"
                />
                <label className="form-check-label" style={{ marginTop: "0" }}>
                  No
                </label>
              </div>
            </div>
            <div className="form-row row">
              <label data-aos="fade-up">Date Of Birth</label>
              <div className="form-group col-md-4" data-aos="fade-up">
                <input
                  type="date"
                  name="date_of_birth"
                  className="form-control"
                  pattern="[0-9]{2}"
                  onChange={createPatientForm}
                  required
                />
                <small style={{ color: "green" }}>
                  Format: Month/Date/Year
                </small>
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-12" data-aos="fade-up">
                <label>
                  A little about why you're registering for a telemedicine visit
                  today and some idea of your medical history.
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  name="reason_for_visit"
                  onChange={createPatientForm}
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-8" data-aos="fade-up">
                <label>Drug Allergies</label>
                <br />
                <small>
                  If you have no allergies, Please write NKDA <br />
                  (No Known Drug Allergies).
                </small>
                <textarea
                  className="form-control"
                  rows="3"
                  name="allergies"
                  onChange={createPatientForm}
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-row row" data-aos="fade-up">
              <div className="form-group col-md-8">
                <label>Medications</label>
                <br />
                <small>
                  Please write all medications you are currently taking.
                </small>
                <textarea
                  className="form-control"
                  rows="3"
                  name="medications"
                  onChange={createPatientForm}
                ></textarea>
              </div>
            </div>
            <div className="form-row row" data-aos="fade-up">
              <div className="form-group col-md-8">
                <label>Past Medical History</label>
                <br />
                <small>List all chronic conditions.</small>
                <textarea
                  className="form-control"
                  rows="3"
                  name="past_medical_history"
                  onChange={createPatientForm}
                ></textarea>
              </div>
            </div>
            <div className="form-row row" data-aos="fade-up">
              <div className="form-group col-md-8">
                <label>Past Surgical History</label>
                <textarea
                  className="form-control"
                  rows="2"
                  name="past_surgical_history"
                  onChange={createPatientForm}
                ></textarea>
              </div>
            </div>
            <hr data-aos="fade-up" />
            <div className="form-group" data-aos="fade-up">
              <label>Preferred Phamercy:</label>
              <br />
              <label style={{ marginTop: "0" }}>Address</label>
              <input
                type="text"
                className="form-control"
                name="phamercy_address_line_1"
                placeholder="1234 Main St"
                onChange={createPatientForm}
              />
            </div>
            <div className="form-group" data-aos="fade-up">
              <label>Address 2</label>
              <input
                type="text"
                className="form-control"
                name="phamercy_address_line_2"
                placeholder="Building Number or floor Number"
                onChange={createPatientForm}
              />
            </div>
            <div className="form-row row" data-aos="fade-up">
              <div className="form-group col-md-6">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city_of_phamercy"
                  onChange={createPatientForm}
                />
              </div>
              <div className="form-group col-md-4">
                <label>State</label>
                <select
                  name="state_of_phamercy"
                  className="form-control"
                  onChange={createPatientForm}
                >
                  <option defaultValue>Choose...</option>
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
                <label>Zip</label>
                <input
                  type="text"
                  className="form-control"
                  name="zipcode_of_phamercy"
                  onChange={createPatientForm}
                />
              </div>
            </div>
            <hr data-aos="fade-up" />
            <label data-aos="fade-up">
              How would you like to pay for this service?
            </label>
            <div className="form-group col-md-5" data-aos="fade-up">
              <select
                name="payment_methord"
                className="form-control"
                onChange={createPatientForm}
                required
              >
                <option defaultValue>Choose...</option>
                <option value="cashapp">CashApp</option>
                <option value="zelle">Zelle</option>
              </select>
            </div>
            <div className="form-row row" data-aos="fade-up">
              <div className="form-group col-md-5">
                <label>Emegency Contact Number</label>
                <input
                  type="tel"
                  name="emergency_phone_number"
                  className="form-control"
                  placeholder="123-456-7891"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  onChange={createPatientForm}
                  required
                />
                <small style={{ color: "green" }}>Format: 123-456-7891</small>
              </div>
            </div>
            <hr data-aos="fade-up" />

            <div
              className="form-group row fileUploadSection"
              data-aos="fade-up"
            >
              <label>Upload documents.</label>
              <small>File types: pdf, jpg</small>
              <input
                type="file"
                className="form-control-file"
                name="documents"
              />
            </div>

            <hr data-aos="fade-up" />
            <button
              type="submit"
              className="btn btn-primary"
              data-aos="fade-up"
            >
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
