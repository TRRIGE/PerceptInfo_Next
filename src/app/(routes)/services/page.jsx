import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="container">
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
                Percept Infosystem work in PHP. We have smart Wordpress
                developers who can integrate the designs and create the custom
                functionality.
              </p>
              <Link href="/payment" className="read-more">
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
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
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
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
                training courses. From PHP and .NET to Python, delve into
                Digital Marketing, Web & Graphic Designing and many more!
              </p>
              <Link href="/payment" className="read-more">
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
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
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
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
                  Calculating Paychecks and Tax Obligations based on Employee
                  Time Sheets
                </li>
                <li>Access to accurate and timely pay slips</li>
                <li>Escalating cost due to in-house payroll maintenance</li>
              </ul>
              <Link href="/payment" className="read-more">
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-box pink">
              <i className="ri-discuss-line icon"></i>
              <h3>Web Development</h3>
              <p>
                Our web development service offers tailored solutions to meet
                your online business needs. From static websites to dynamic web
                applications, our team crafts responsive and user-friendly
                digital experiences.
              </p>
              <Link href="/payment" className="read-more">
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-box blue">
              <i className="ri-discuss-line icon"></i>
              <h3>Drop Services</h3>
              <p>
                With our drop services, you can streamline your business
                operations by outsourcing specific tasks or processes. Whether
                it's customer support, data entry, or content creation, we
                handle the workload while you focus on core business activities.
              </p>
              <Link href="/payment" className="read-more">
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-box orange">
              <i className="ri-discuss-line icon"></i>
              <h3>Training</h3>
              <p>
                Empower your workforce with our comprehensive training programs.
                Our courses cover a wide range of topics, from technical skills
                to soft skills development, designed to enhance individual and
                team performance.
              </p>
              <Link href="/payment" className="read-more">
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-box green">
              <i className="ri-discuss-line icon"></i>
              <h3>Consulting</h3>
              <p>
                Our consulting service provides expert guidance and strategic
                advice to help businesses overcome challenges and achieve their
                goals. From market analysis to process optimization, we offer
                personalized solutions to drive growth and success.
              </p>
              <Link href="/payment" className="read-more">
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-box red">
              <i className="ri-discuss-line icon"></i>
              <h3>100% Placement Program</h3>
              <p>
                Join our 100% placement program and kickstart your career with
                confidence. We provide intensive training, career counseling,
                and industry connections to ensure every participant secures a
                rewarding job opportunity.
              </p>
              <Link href="/payment" className="read-more">
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
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
              <h3>Payroll</h3>
              <p>
                Simplify payroll management with our efficient and reliable
                payroll services. From salary processing to tax compliance, we
                handle all aspects of payroll administration, allowing you to
                focus on running your business smoothly.
              </p>
              <Link href="/payment" className="read-more">
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-box pink">
              <i className="ri-discuss-line icon"></i>
              <h3>Internship</h3>
              <p>
                Gain practical experience and valuable skills through our
                internship program. Whether you're a student looking to explore
                your field of study or a career changer seeking hands-on
                training, our internships offer real-world learning
                opportunities tailored to your interests and goals.
              </p>
              <Link href="/payment" className="read-more">
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="service-box blue">
              <i className="ri-discuss-line icon"></i>
              <h3>Other Services</h3>
              <ul className="text-start">
                <li>
                  Security and confidentiality of payroll and employee data
                </li>
                <li>Compliance with the latest laws and regulations</li>
                <li>Payroll Services offered by Percept Infosystem</li>
                <li>
                  Security and confidentiality of payroll and employee data
                </li>
                <li>Compliance with the latest laws and regulations</li>
              </ul>
              <Link href="/payment" className="read-more">
                <span>Get Service Now</span>{" "}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
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
                We help you to see world differently , discover oppurtunities
                you may never have imagined.
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
      </section>
    </div>
  );
};

export default page;
