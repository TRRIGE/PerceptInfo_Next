import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="clients">
      <div className="row mt-5" data-aos="fade-up" id="clients">
        <div className="mb-5">
          <h4 className="text-center mb-3">
            <span
              className="text-dark text-offset-2"
              style={{ borderBottom: "2px solid #b55d41" }}
            >
              Our Clients
            </span>
          </h4>
          <p className="text-center lead">
            These are some of the customers with whom we have had the pleasure
            of working. <br /> Would you like to be the next?
          </p>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="swiper-slide">
            <Image src="/client1.png" alt="" width={200} height={200} />
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="swiper-slide">
            <Image src="/client2.png" alt="" width={200} height={200} />
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="swiper-slide">
            <Image src="/client3.png" alt="" width={200} height={200} />
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="swiper-slide">
            <Image src="/client4.png" alt="" width={200} height={200} />
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="swiper-slide">
            <Image src="/client5.jpeg" alt="" width={200} height={200} />
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="swiper-slide">
            <Image src="/client6.jpeg" alt="" width={200} height={200} />
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="swiper-slide">
            <Image src="/client7.jpeg" alt="" width={200} height={200} />
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="swiper-slide">
            <Image src="/client8.jpeg" alt="" width={200} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
