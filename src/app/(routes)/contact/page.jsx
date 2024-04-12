import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="mb-5 mt-5">
          <h4 className="text-center mb-3">
            <span
              className="text-dark text-offset-2"
              style={{ borderBottom: "2px solid #b55d41" }}
            >
              Reach Our Expert Team
            </span>
          </h4>
          <p className="text-center lead">
            Send a message through given form, If your enquiry is time sensitive
            please use below contact details.
          </p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-geo-alt" style={{ color: "#b55d41" }}></i>
                  <h3 className="text-black">Address</h3>
                  <p>
                    20/2, Akar Builders, Opp – Dalal Nursing home, Near Byramji
                    town, Sadar, Nagpur-440001
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i
                    className="bi bi-telephone"
                    style={{ color: "#b55d41" }}
                  ></i>
                  <h3 className="text-black">Call Us</h3>
                  <p>
                    +91 9096401766 <br />
                    +91 7414977373
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i
                    className="bi bi-envelope"
                    style={{ color: "#b55d41" }}
                  ></i>
                  <h3 className="text-black">Email Us</h3>
                  <p>
                    info@perceptinfosys.com
                    <br />
                    perceptruchik1@gmail.com
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-clock" style={{ color: "#b55d41" }}></i>
                  <h3 className="text-black">Open Hours</h3>
                  <p>
                    Monday - Friday
                    <br />
                    9:00AM - 05:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    style={{ borderColor: "black" }}
                  />
                </div>

                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                    style={{ borderColor: "black" }}
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                    style={{ borderColor: "black" }}
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                    style={{ borderColor: "black" }}
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <button type="button" className="btn btn-dark">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
