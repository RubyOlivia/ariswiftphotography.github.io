import React from "react";
import { useState } from "react";

const Contact = () => {
    const [senderName, setSenderName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");
    const [senderMessage, setSenderMessage] = useState("");

    const handleName = (e) => {
        setSenderName(e.target.value)

    }

    const handleEmail = (e) => {
        setSenderEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setSenderMessage(e.target.value)
    }

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
            <div className="col-xs-6 text-center">
              <h3 className="fs-5 text-center text-white">Contact</h3>
              <p className="lead text-center text-white">
                Let's connect and create something amazing together!
              </p>
              <a href="#" class="link-light">
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="row pb-3 justify-content-center ">
          <div className="col-md-8 text-center text-white">
            <form action="">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John Doe"
                  value={senderName}
                  onChange={handleName}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Your E-mail
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={senderEmail}
                  onChange={handleEmail}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Your Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  placeholder="Your message here..."
                  value={senderMessage}
                  onChange={handleMessage}
                ></textarea>
              </div>
              <button type="submit" class="btn btn-light me-4 rounded pill px-4 py-2">
                {" "}
                Send Message <i className="fa fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
