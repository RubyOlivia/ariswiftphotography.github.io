import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";


const Register = () => {
  
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // object destructuring
    const { username, email, password } = user;
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username, email, password
        }),
      });
        if(res.status === 400 || !res){
            window.alert("User already exists")
        } else {
            window.alert("Registration Successful")
            window.history.pushState("/login")
        }
    } catch (error) {
      console.log(error);
    }
  };

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
                        rounded-pull mb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder p-5">Register</h1>
            <form onSubmit={handleSubmit} method="POST">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Username
                </label>
                <input
                  type="username"
                  class="form-control"
                  id="exampleInputUsername"
                  aria-describedby="usernameHelp"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
                <div id="emailHelp" class="form-text">
                  Choose a username
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
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
                  id="exampleInputPassword"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
                 <div id="emailHelp" class="form-text">
                  Choose a password
                </div>
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
