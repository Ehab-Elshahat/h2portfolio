import React from 'react'
import HeroImg from '../../Assets/removebg-hero.png'

function Hero() {
  return (
    <header className="header text-light">
      <div className="container">
        <div className="row flex-md-row flex-column-reverse">
          <div className="col-md-8">
            <h1 className="display-2 fw-bolder">
              Hi, I'm Ehab{" "}
              <span className="text-warning  rotate-hand">
                <i class="fa-solid fa-hand"></i>
              </span>
            </h1>
            <p className="lead fst-italic">
              Hello! I'm a passionate front-end developer with a keen eye for
              design and a strong commitment to creating seamless user
              experiences. With expertise in HTML, CSS, and JavaScript, I build
              responsive, interactive websites that bring ideas to life.
            </p>
            <div className="my-5">
              <p className="lead fst-italic">
                <span className="text-light me-2">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <span> Kafr El-Sheikh, Egypt</span>
              </p>
              <p className="lead fst-italic">
                <span className=" text-success me-2">
                  <i class="fa-solid fa-check"></i>
                </span>
                <span>Available for new projects</span>
              </p>
            </div>
            <div className="mb-5">
              <a
                href="https://github.com/Ehab-Elshahat"
                target="_blank"
                className="btn  mx-1 p-1"
                rel="noreferrer"
              >
                <span>
                  <i className="fa-brands fa-github fa-2x"></i>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/ehab-mohamed-685396140/"
                target="_blank"
                className="btn  mx-1 p-1"
                rel="noreferrer"
              >
                <span>
                  <i className="fa-brands fa-linkedin fa-2x"></i>
                </span>
              </a>
              <a
                href="https://www.facebook.com/ehap.hoba.1"
                target="_blank"
                className="btn  mx-1 p-1"
                rel="noreferrer"
              >
                <span>
                  <i className="fa-brands fa-facebook fa-2x"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4 my-md-0 my-5">
            <img
              className="w-100 hero-img "
              src={HeroImg}
              alt="my-Photo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero