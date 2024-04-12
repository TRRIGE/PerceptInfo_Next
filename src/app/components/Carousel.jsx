import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
          <div className="carousel-image-container">
            <img
              src="/image1.jpg"
              className="d-block w-100"
              height={520}
              alt="..."
            />
            <div className="carousel-caption text-start">
              <p className="" id="coureselFont">
                {" "}
                IT Consultancy Services For Your
                <br /> Business!
              </p>
              <h2 id="courselText">
                Work with Percept Infosystems to Plan for Future of Your
                Business!
              </h2>
            </div>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
          <div className="carousel-image-container">
            <img
              src="/image2.jpg"
              className="d-block w-100"
              height={520}
              alt="..."
            />
            <div className="carousel-caption text-start">
              <p className="" id="coureselFont">
                # A Different Digital
                <br /> Agency!
              </p>
              <h2 id="courselText">
                We With Focus on Productivity, Combining Designs and Results
              </h2>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-transparent border-0 rounded-circle"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-transparent border-0 rounded-circle"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
