import React from "react";

const Footer = () => {
  return (
    <section id="footer">
    <footer className="bg-dark text-white text-center">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-4 offset-1">
              <h4>Nature and wildlife photography</h4>
            </div>
            <div className="col-6 offset-1">
              <form>
                <h5>Subscribe to my newsletter!</h5>
                <p>I'll keep you in the loop</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-light" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-center py-4 my-4 border-top">
            <p>© 2023 ari swift Photography</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-light" to="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
