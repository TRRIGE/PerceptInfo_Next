import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section>
      <div className="row text-center d-flex align-items-stretch mt-5">
        <div className="mb-5">
          <h4 className="text-center mb-3">
            <span
              className="text-dark text-offset-2"
              style={{ borderBottom: "2px solid #b55d41" }}
            >
              Testimonial
            </span>
          </h4>
          <p className="text-center lead">Words From Our Customers</p>
        </div>
        <div
          className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch"
          id="navShadow1"
        >
          <div className="card testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#e9222c" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <Image src="/testimonial1.jpg" height={100} width={105} />
            </div>
            <div className="card-body">
              <h4 className="mb-4">Smith Smantha</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <i className="bi bi-quote me-2"></i>In our busy schedule,
                sometimes it gets hard to maintain our website and rank it on
                the search engines, but Percept InfoSystem made it possible for
                us to solely focus on our business as our online activities will
                be handled by them perfectly. We have never faced any problem in
                our website designing and maintenance because entire team of
                Percept InfoSystem is very helpful and attentive
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch"
          id="navShadow1"
        >
          <div className="card testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#f5219d" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <Image src="/testimonial2.jpg" height={100} width={105} />
            </div>
            <div className="card-body">
              <h4 className="mb-4">John Cudrow</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <i className="bi bi-quote me-2"></i>Excellent, working with
                Percept InfoSystem was great. Putting together a website is a
                task, finding the right individual or company is even more
                complex. We did our search around looking for a particular
                company that had the ability to create, design and optimize our
                company's website and we were lucky to have found Mr. Amit
                Tiwari for the same. Thanks to him and his team, due to their
                knowledge and determination our website looks great and
                functions really good
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 mb-0 d-flex align-items-stretch"
          id="navShadow1"
        >
          <div className="card testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#f58c09" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <Image src="/testimonial3.jpg" height={100} width={105} />
            </div>
            <div className="card-body">
              <h4 className="mb-4">Lisa Smith</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <i className="bi bi-quote me-2"></i>We offer customised people
                management solutions, but we are truly fans of Percept
                InfoSystem management skills. They are always good to
                communicate with and they make complicated process look very
                simple. Their team has one of the most hard working
                professionals. They are just one call away from us. Our entire
                team highly appreciates Percept InfoSystem's work ethics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
