import React from "react";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 mt-5">
              <h1 className="display-8 fw-bolder mb-4 text-center text-white">
                Nature's canvas, our vision
              </h1>
              <p className="lead text-center fs-4 mb-4 text-white">
                Together we will harness the beauty of nature through your lens
              </p>
              <div className="d-flex justify-content-center">
                <NavLink to="/gallery" className="btn btn-light me-4 rounded pill px-4 py-2">
                  Check out my gallery!
                </NavLink>
                <NavLink to="/contact" className="btn btn-outline-light me-4 rounded pill px-4 py-2">
                  Get in touch!
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
