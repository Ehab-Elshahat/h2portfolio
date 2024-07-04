import React from 'react'

function Contact() {
  return (
    <section className="experience py-5" id="contact">
      <div className="container">
        <h5 className="section-title">Get in touch</h5>
        <p className="text-center text-light lead bold mt-5 mb-0">
          What’s next? Feel free to reach out to me if you are looking
        </p>
        <p className="text-center text-light lead bold mt-1 mb-0">
          for a developer, have a query, or simply want to connect.
        </p>

        <p className="text-center text-light mt-5 fw-bolder display-5">
          <i className="fa-regular fa-envelope"></i>
          <span className="ms-3 ">ehabelshahat@yahoo.com</span>
        </p>
        <p className="text-center text-light mt-5 fw-bolder display-5">
          <i class="fa-solid fa-phone"></i>
          <span className="ms-3 ">+201025198925</span>
        </p>
        <p className="text-center text-light mt-5 lead">
          You may also find me on these platforms!
        </p>

        <div className="mt-3 text-center">
          <a
            href="https://github.com/Ehab-Elshahat"
            target="_blank"
            className="btn btn-dark  mx-1 "
            rel="noreferrer"
          >
            <span>
              <i className="fa-brands fa-github fa-2x"></i>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ehab-mohamed-685396140/"
            target="_blank"
            className="btn btn-dark  mx-1 "
            rel="noreferrer"
          >
            <span>
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </span>
          </a>
          <a
            href="https://www.facebook.com/ehap.hoba.1"
            target="_blank"
            className="btn btn-dark  mx-1 "
            rel="noreferrer"
          >
            <span>
              <i className="fa-brands fa-facebook fa-2x"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact