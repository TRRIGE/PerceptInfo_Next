import React from "react";
import Image from "next/image";
import Link from "next/link";

const Aboutus = () => {
  return (
    <div className="row gx-0 mt-5">
      <h4 className="text-center mb-5">
        <span
          className="text-dark text-offset-2"
          style={{ borderBottom: "2px solid #b55d41" }}
        >
          About Us
        </span>
      </h4>
      <div className="col-lg-6 my-auto" data-aos="fade-up" data-aos-delay="200">
        <div className="content">
          <h1 style={{ color: "#B55D41" }} className="mb-3">
            Who We Are
          </h1>
          <h2></h2>
          <p className="mb-4">
            Percept Infosystem is a software development and IT Training
            provider and Consultants company based in Nagpur offering services
            in the area of application development, web development, Training in
            IT and Non- IT Languages and Outsourcing.
          </p>
          <div className="d-flex">
            <Link href="/about" className="me-2">
              <button
                id="smallbtn"
                type="button"
                className="btn btn-dark"
                style={{ backgroundColor: "##B55D41" }}
              >
                Read More!
              </button>
            </Link>
            <a href="about.pptx">
              <button
                id="smallbtn"
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
      <div
        className="col-lg-6"
        id="aboutImage"
        data-aos="zoom-out"
        data-aos-delay="200"
      >
        <Image
          src="/about.jpg"
          alt="..."
          width={500}
          height={300}
          id="imageBorder"
        />
      </div>
    </div>
  );
};

export default Aboutus;
