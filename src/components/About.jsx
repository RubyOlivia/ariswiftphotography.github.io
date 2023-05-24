import React from "react";
import camerapic from "../assets/images/camera.jpg";


const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row justify-content-end">
            <div className="col-sm-6">
              <h3 className="fs-5 text-center">About me</h3>
              <p className="lead mb-4">
                Hey there! I'm ari, a freelance photographer based in Boston,
                originally from Phoenix, Arizona. I've been taking photos for as
                long as I can remember, but it wasn't until I moved to Boston to
                pursue journalism that I really started to develop my skills.
              </p>

              <p className="lead mb-4 text-center">
                {" "}
                Back in Arizona, I took a ton of photos of the beautiful desert
                landscapes and sunsets. After moving to Boston, I continued to
                refine my craft, developing a unique perspective on the world
                around me. Today, I'm passionate about capturing every moment,
                big or small, and bringing out the beauty and complexity of the
                world in all its forms. Whether you need portraits, event
                photography, or breathtaking landscapes, I've got you covered.
                So if you're looking to capture your own unique vision of the
                world, let's connect and create something amazing together!
              </p>
              <div className="text-center">
                <button className="btn btn-light me-4 rounded pill px-4 py-2">
                  Check out my gallery!
                </button>
                <button className="btn btn-light me-4 rounded pill px-4 py-2">
                  Get in touch!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
