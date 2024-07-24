import React from "react";

const App = () => {
  return (
    <>
      <div className="container1 ">
        <div className="inner-container">
          <h1>Contact Us</h1>
          <div className="container mt-5 p-0">
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="nameInput" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Name"
                />
              </div>
              <div className="col">
                <label htmlFor="surnameInput" className="form-label">
                  Surname *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="surnameInput"
                  placeholder="Surname"
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address *
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="radio-container">
            <div class="form-check form-check-border">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                General Enquiry
              </label>
            </div>
            <div class="form-check form-check-border">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Support Request
              </label>
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message *
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label class="form-check-label checkbox-size" for="defaultCheck1">
              I consent to being contacted by the team *
            </label>
          </div>
          <div class="d-grid gap-2 ">
            <button class="btn btn-primary button-backgorund " type="button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
