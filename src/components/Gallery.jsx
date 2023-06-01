import React from "react";
import { NavLink } from "react-router-dom";
import toasterpic from "../assets/images/Toaster1.jpg";

const Gallery = () => {
  return (
    <div>
      <section id="gallery">
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <h3 className="fs-5 text-center">Gallery</h3>
              <p className="lead text-center">
                Here are some of my favorite shots
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={toasterpic}
              alt="image not loading :{"
              width="400"
              height="auto"
            />
            <img
              src={toasterpic}
              alt="image not loading :{"
              width="400"
              height="auto"
            />
            <img
              src={toasterpic}
              alt="image not loading :{"
              width="400"
              height="auto"
            />
            <img
              src={toasterpic}
              alt="image not loading :{"
              width="400"
              height="auto"
            />
            <img
              src={toasterpic}
              alt="image not loading :{"
              width="400"
              height="auto"
            />
            <img
              src={toasterpic}
              alt="image not loading :{"
              width="400"
              height="auto"
            />
            <img
              src={toasterpic}
              alt="image not loading :{"
              width="400"
              height="auto"
            />
            <img
              src={toasterpic}
              alt="image not loading :{"
              width="400"
              height="auto"
            />
            <img
              src={toasterpic}
              alt="image not loading :{"
              width="400"
              height="auto"
            />
          <div className="text-center mt-5">
                
                <NavLink to="/about" className="btn btn-light me-4 rounded pill px-4 py-2">
                    Get to know me!
                  </NavLink>
                  <NavLink to="/contact" className="btn btn-light me-4 rounded pill px-4 py-2">
                    Get in touch!
                  </NavLink>
                  
                </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
