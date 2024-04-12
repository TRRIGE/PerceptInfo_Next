import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="row mt-5">
        <div className="mb-4">
          <h4 className="text-center mb-3">
            <span
              className="text-dark text-offset-2"
              style={{ borderBottom: "2px solid #b55d41" }}
            >
              LET'S TALK ABOUT YOUR NEXT PROJECT
            </span>
          </h4>
          <p className="text-center lead">
            We are here to help! Fill out just a little information about your
            requirement <br /> and we will get back to you with proposed
            solution
          </p>
        </div>
        <div className="col-11 mx-auto" id="contactDiv">
          <form>
            <div className="row mb-4">
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control"
                    style={{ borderColor: "black" }}
                  />
                  <label className="form-label mt-2" for="form6Example1">
                    <strong>First name</strong>
                  </label>
                </div>
              </div>
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <input
                    type="text"
                    id="form6Example2"
                    className="form-control"
                    style={{ borderColor: "black" }}
                  />
                  <label className="form-label mt-2" for="form6Example2">
                    <strong>Last name</strong>
                  </label>
                </div>
              </div>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="text"
                id="form6Example3"
                className="form-control"
                style={{ borderColor: "black" }}
              />
              <label className="form-label mt-2" for="form6Example3">
                <strong>Company name</strong>
              </label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="text"
                id="form6Example4"
                className="form-control"
                style={{ borderColor: "black" }}
              />
              <label className="form-label mt-2" for="form6Example4">
                <strong>Address</strong>
              </label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="email"
                id="form6Example5"
                className="form-control"
                style={{ borderColor: "black" }}
              />
              <label className="form-label mt-2" for="form6Example5">
                <strong>Email</strong>
              </label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="number"
                id="form6Example6"
                className="form-control"
                style={{ borderColor: "black" }}
              />
              <label className="form-label mt-2" for="form6Example6">
                <strong>Phone</strong>
              </label>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
              <textarea
                className="form-control"
                id="form6Example7"
                rows="4"
                style={{ borderColor: "black" }}
              ></textarea>
              <label className="form-label mt-2" for="form6Example7">
                <strong>Additional information</strong>
              </label>
            </div>
            <button
              data-mdb-ripple-init
              type="button"
              className="btn btn-dark btn-block mb-4"
            >
              Send Your Message!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
