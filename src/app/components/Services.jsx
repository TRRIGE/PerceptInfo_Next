import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="row gy-4 mt-4">
        <div className="mb-4">
          <h4 className="text-center mb-3">
            <span
              className="text-dark text-offset-2"
              style={{ borderBottom: "2px solid #b55d41" }}
            >
              Our Services
            </span>
          </h4>
          <p className="text-center lead">
            We work with your company to identify requirements, implement
            technology programs,
            <br /> and initiate project implementation and digital
            transformation that maximize efficiency
          </p>
        </div>
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="service-box blue">
            <i className="ri-discuss-line icon"></i>
            <h3>Development</h3>
            <p>
              Percept Infosystem work in PHP. We have smart Wordpress developers
              who can integrate the designs and create the custom functionality.
            </p>
            <Link href="/payment" className="read-more">
              <span>Read More</span> <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="service-box orange">
            <i className="ri-discuss-line icon"></i>
            <h3>Digital Marketing</h3>
            <p>
              Unlock your brand's potential with Percept Infosystem's expert
              digital marketing solutions. Elevate your online presence and
              reach your target audience with precision and impact.
            </p>
            <Link href="/payment" className="read-more">
              <span>Read More</span> <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="service-box green">
            <i className="ri-discuss-line icon"></i>
            <h3>Training Courses</h3>
            <p>
              Expand your horizons with Percept Infosystem's comprehensive
              training courses. From PHP and .NET to Python, delve into Digital
              Marketing, Web & Graphic Designing and many more!
            </p>
            <Link href="/payment" className="read-more">
              <span>Read More</span> <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="service-box red">
            <i className="ri-discuss-line icon"></i>
            <h3>Placements</h3>
            <p>
              Dedicated Placement Cell for Lifetime Placement Support with a
              Network with leading IT Companies.
            </p>
            <Link href="/payment" className="read-more">
              <span>Read More</span> <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="service-box purple">
            <i className="ri-discuss-line icon"></i>
            <h3>Payroll Services</h3>
            <ul className="text-start">
              <li>Employee Management</li>
              <li>Salary Management</li>
              <li>Leave Management</li>
              <li>PF/ESIC/PT returns</li>
              <li>
                Calculating Paychecks and Tax Obligations based on Employee Time
                Sheets
              </li>
              <li>Access to accurate and timely pay slips</li>
              <li>Escalating cost due to in-house payroll maintenance</li>
            </ul>
            <Link href="/payment" className="read-more">
              <span>Read More</span> <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="service-box pink">
            <i className="ri-discuss-line icon"></i>
            <h3>Other Services</h3>
            <ul className="text-start">
              <li>Security and confidentiality of payroll and employee data</li>
              <li>Compliance with the latest laws and regulations</li>
              <li>Payroll Services offered by Percept Infosystem</li>
              <li>Security and confidentiality of payroll and employee data</li>
              <li>Compliance with the latest laws and regulations</li>
            </ul>
            <Link href="/payment" className="read-more">
              <span>Read More</span> <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
