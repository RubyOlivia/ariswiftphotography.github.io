import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center justify-content-center form">
            <h1 className="display-4 fw-bolder justify-content-center text-white">
              Welcome!
            </h1>
            <p className="lead text-center text-white">
              Enter your email and password to register
            </p>
            <h5 className="mb-4 text-white">Already signed up?</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light 
                        ounded-pull mb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder p-5">Register</h1>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  Your e-mail here
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
