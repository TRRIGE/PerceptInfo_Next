import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="container">
      <div className="row gx-0 mt-5 ">
        <h4 className="text-center mb-5">
          <span
            className="text-dark text-offset-2"
            style={{ borderBottom: "2px solid #b55d41" }}
          >
            About Us
          </span>
        </h4>
        <div
          className="col-lg-6 innerImage1"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <Image
            src="/aboutMain1.jpg"
            alt=""
            width={500}
            height={300}
            id="imageBorder"
          />
        </div>
        <div
          className="col-lg-6 my-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="content">
            <h1 style={{ color: "#B55D41" }} className="mb-3">
              Who We Are
            </h1>
            <h2></h2>
            <p className="mb-4">
              Percept Infosystem is a software development and IT Training
              provider and Consultants company based in Nagpur offering services
              in the area of application development, web development, Training
              in IT and Non- IT Languages and Outsourcing.
            </p>
            <div>
              <a href="about.pptx" target="_blank">
                <button
                  type="button"
                  className="btn btn-dark"
                  style={{ backgroundColor: "##B55D41" }}
                >
                  Our Corporate Brochure
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row gx-0 mt-5">
        <div
          className="col-lg-6 my-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="content">
            <h1 style={{ color: "#B55D41" }} className="mb-3">
              Why Join Us?
            </h1>
            <h2></h2>
            <div className="mb-4">
              <ul>
                <li>
                  Organized pre-placement /training /Workshops/ Seminars for
                  students.
                </li>
                <li>
                  We operate with the shared values of integrity, quality and
                  accountability in everything we do.
                </li>
                <li>
                  We have well trained, reliable, Experienced professionals;
                  with capacity to deliver on commitments, rapid responsiveness
                  to resource needs and great sense of urgency there b resulting
                  into cost effective pricing for our customer.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 innerImage2 text-lg-end"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <Image
            src="/aboutMain2.jpg"
            alt=""
            width={500}
            height={300}
            id="imageBorder"
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          <div>
            <h1>
              <i
                className="bi bi-briefcase me-3"
                style={{ color: "#b55d41" }}
              ></i>
              ANY TIME, ANY WHERE CONSULTING
            </h1>
            <h3 className="mt-4 mb-3" style={{ color: "#b55d41" }}>
              Get A Free Consultancy Right Now Here
            </h3>
            <p className="lead">
              We help you to see world differently , discover oppurtunities you
              may never have imagined.
            </p>
            <a href="/contact">
              <button
                type="button"
                className="btn btn-dark"
                style={{ backgroundColor: "##B55D41" }}
              >
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
