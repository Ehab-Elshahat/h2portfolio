import React from 'react'
import Qemma from "../../Assets/qemma-soft.com"
import Matajir from "../../Assets/matajier.png";
import users from "../../Assets/users.png";
import special from "../../Assets/special-desgin.png";

function Work() {
  return (
    <section className="skills py-5" id="work">
      <div className="container">
        <h5 className="section-title">Work</h5>
        <p className="text-center text-light lead mt-4 mb-0">
          Some of the noteworthy projects I have built
        </p>
        <div className="work-container mt-5">
          <div className="work-img">
            <div className="img">
              <a
                href="https://www.qemma-soft.com/"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <img src={Qemma} alt="Qemma" />
              </a>
            </div>
          </div>
          <div className="work-info">
            <h4 className="text-light">Qemma soft</h4>
            <p className=" my-4 text-light">
              A multi-page website for Qemma-soft Company{" "}
            </p>
            <div className="mb-2">
              <h6 className="section-title d-inline-block me-3">HTML</h6>
              <h6 className="section-title d-inline-block me-3">CSS</h6>
              <h6 className="section-title d-inline-block me-3">bootstrap</h6>
              <h6 className="section-title d-inline-block me-3">javascript</h6>
              <h6 className="section-title d-inline-block me-3">
                Fully Responsive
              </h6>
            </div>

            <a
              href="https://www.qemma-soft.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <div className="work-container mt-5">
          <div className="work-info">
            <h4 className="text-light">Matajir</h4>
            <p className=" my-4 text-light">Matajir is E-Commerce website </p>
            <div className="mb-2">
              <h6 className="section-title d-inline-block me-3">HTML</h6>
              <h6 className="section-title d-inline-block me-3">CSS</h6>
              <h6 className="section-title d-inline-block me-3">bootstrap</h6>
              <h6 className="section-title d-inline-block me-3">javascript</h6>
              <h6 className="section-title d-inline-block me-3">
                Fully Responsive
              </h6>
            </div>

            <a
              href="https://ehab-elshahat.github.io/matajir/pages/homepage"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <div className="work-img">
            <div className="img">
              <a
                href="https://ehab-elshahat.github.io/matajir/pages/homepage"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <img src={Matajir} alt="Matajir" />
              </a>
            </div>
          </div>
        </div>
        <div className="work-container mt-5">
          <div className="work-img">
            <div className="img">
              <a
                href="https://github.com/Ehab-Elshahat/qemma-dashboard"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <img src={users} alt="Qemma-dashboard" />
              </a>
            </div>
          </div>
          <div className="work-info">
            <h4 className="text-light">Qemma Dashboard</h4>
            <p className=" my-4 text-light">
              Dashboard for Qemma-soft website{" "}
            </p>
            <div className="mb-2">
              <h6 className="section-title d-inline-block me-3">HTML</h6>
              <h6 className="section-title d-inline-block me-3">CSS</h6>
              <h6 className="section-title d-inline-block me-3">bootstrap</h6>
              <h6 className="section-title d-inline-block me-3">javascript</h6>
              <h6 className="section-title d-inline-block me-3">
                Fully Responsive
              </h6>
            </div>

            <a
              href="https://github.com/Ehab-Elshahat/qemma-dashboard"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <div className="work-container mt-5">
          <div className="work-info">
            <h4 className="text-light">Landing Page</h4>
            <p className=" my-4 text-light">
              {" "}
              website one page with several sections{" "}
            </p>
            <div className="mb-2">
              <h6 className="section-title d-inline-block me-3">HTML</h6>
              <h6 className="section-title d-inline-block me-3">CSS</h6>
              <h6 className="section-title d-inline-block me-3">bootstrap</h6>
              <h6 className="section-title d-inline-block me-3">javascript</h6>
              <h6 className="section-title d-inline-block me-3">
                Fully Responsive
              </h6>
            </div>

            <a
              href="https://ehab-elshahat.github.io/Special-Desgin/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <div className="work-img">
            <div className="img">
              <a
                href="https://ehab-elshahat.github.io/Special-Desgin/"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <img src={special} alt="special" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work

