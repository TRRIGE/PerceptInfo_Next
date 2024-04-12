import React from "react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4 mt-5" data-aos="fade-left">
          <div className="mb-4">
            <h4 className="text-center mb-3">
              <span
                className="text-dark text-offset-2"
                style={{ borderBottom: "2px solid #b55d41" }}
              >
                Our Pricing
              </span>
            </h4>
            <p className="text-center lead">Check our Pricing</p>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="box">
              <h3 style={{ color: "#07d5c0" }}>Free Plan</h3>
              <div className="price">
                <sup>₹</sup>0<span> / mo</span>
              </div>
              <Image
                src="/pricing-free.png"
                className="img-fluid"
                height={500}
                width={500}
                alt="..."
              />
              <ul>
                <li>Ideal for individuals or small businesses</li>
                <li>Limited access to services</li>
                <li>No cost, provides initial guidance</li>
              </ul>
              <Link href="/contact" className="btn-buy">
                Contact
              </Link>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="box">
              <span className="featured">Featured</span>
              <h3 style={{ color: "#65c600" }}>Starter Plan</h3>
              <div className="price">
                <sup>₹</sup>500<span> / mo</span>
              </div>
              <Image
                src="/pricing-starter.png"
                className="img-fluid"
                height={500}
                width={500}
                alt="..."
              />
              <ul>
                <li>Affordable rate</li>
                <li>Targeted at startups and small businesses</li>
                <li>
                  Includes personalized advice, strategic planning, basic
                  support
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-buy"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5 text-center"
                    id="exampleModalLabel"
                  >
                    Buy Starter Plan!
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <script
                    async
                    src="https://js.stripe.com/v3/buy-button.js"
                  ></script>

                  <stripe-buy-button
                    buy-button-id="buy_btn_1P4KmsSCGO5x18qc3E7qkGzi"
                    publishable-key="pk_test_51OyvHfSCGO5x18qcZ8Octut4gM0u7Iw2jeZ2kHPr93LI6s80Dag0COI033faLw5zEiJhtViTnnDbXsDrnQbyMDTQ00D5LIygmi"
                  ></stripe-buy-button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="box">
              <h3 style={{ color: "#ff901c" }}>Business Plan</h3>
              <div className="price">
                <sup>₹</sup>1000<span> / mo</span>
              </div>
              <Image
                src="/pricing-business.png"
                className="img-fluid"
                height={500}
                width={500}
                alt="..."
              />
              <ul>
                <li>Tailored for established enterprises</li>
                <li>Comprehensive consultancy services</li>
                <li>
                  In-depth analysis, customized solutions, ongoing support
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-buy"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5 text-center"
                    id="exampleModalLabel"
                  >
                    Buy Business Plan!
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <script
                    async
                    src="https://js.stripe.com/v3/buy-button.js"
                  ></script>

                  <stripe-buy-button
                    buy-button-id="buy_btn_1P4L7xSCGO5x18qcNEX6kAFc"
                    publishable-key="pk_test_51OyvHfSCGO5x18qcZ8Octut4gM0u7Iw2jeZ2kHPr93LI6s80Dag0COI033faLw5zEiJhtViTnnDbXsDrnQbyMDTQ00D5LIygmi"
                  ></stripe-buy-button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="box">
              <h3 style={{ color: "#ff0071" }}>Ultimate Plan</h3>
              <div className="price">
                <sup>₹</sup>1300<span> / mo</span>
              </div>
              <Image
                src="/pricing-ultimate.png"
                className="img-fluid"
                width={500}
                height={500}
                alt="..."
              />
              <ul>
                <li>Most comprehensive offering</li>
                <li>Designed for ambitious organizations</li>
                <li>
                  Advanced analytics, intensive project management, executive
                  coaching
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-buy"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                Buy Now
              </button>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal3"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5 text-center"
                    id="exampleModalLabel"
                  >
                    Buy Ultimate Plan!
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <script
                    async
                    src="https://js.stripe.com/v3/buy-button.js"
                  ></script>

                  <stripe-buy-button
                    buy-button-id="buy_btn_1P4LAJSCGO5x18qcS7aqz7zX"
                    publishable-key="pk_test_51OyvHfSCGO5x18qcZ8Octut4gM0u7Iw2jeZ2kHPr93LI6s80Dag0COI033faLw5zEiJhtViTnnDbXsDrnQbyMDTQ00D5LIygmi"
                  ></stripe-buy-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
