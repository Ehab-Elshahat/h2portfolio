/** @format */

import React, { useEffect, useState } from "react";
import html from "../../Assets/html5_icon.png";
import css from "../../Assets/css3_icon.png";
import javascript from "../../Assets/javascript-js.png";
import bootstrap from "../../Assets/bootstrap.png";
import sass from "../../Assets/sass.png";
import tailwind from "../../Assets/tailwind.png";
import github from "../../Assets/github.png";
import react from "../../Assets/react.png";
import jquery from "../../Assets/jquery.png";





function Skills() {




  return (
    <section className="skills py-5" id="skills">
      <div className="container">
        <h5 className="section-title">Skills</h5>
        <p className="text-center text-light lead mt-4 mb-0">
          The skills, tools and technologies I am really good at:
        </p>
        <div className="skill-container mt-5  ">
        

          <div className="skill-box  ">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
            >
              <img src={html} alt="html" className="skills-icon my-3" />
            </a>
            <p className="text-light fw-bold">HTML</p>
          </div>
          <div className="skill-box ">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/css"
              target="_blank"
              rel="noreferrer"
            >
              <img src={css} alt="css" className="skills-icon my-3" />
            </a>
            <p className="text-light fw-bold">CSS</p>
          </div>
          <div className="skill-box ">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/javascript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={javascript}
                alt="javascript"
                className="skills-icon my-3"
              />
            </a>
            <p className="text-light fw-bold">javascript</p>
          </div>
          <div className="skill-box">
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={bootstrap}
                alt="bootstrap"
                className="skills-icon my-3"
              />
            </a>
            <p className="text-light fw-bold">bootstrap</p>
          </div>
          <div className="skill-box ">
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
              <img src={sass} alt="sass" className="skills-icon my-3" />
            </a>
            <p className="text-light fw-bold">Sass</p>
          </div>
          <div className="skill-box ">
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img src={tailwind} alt="tailwind" className="skills-icon my-3" />
            </a>
            <p className="text-light fw-bold">tailwind</p>
          </div>
          <div className="skill-box ">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img src={github} alt="github" className="skills-icon my-3" />
            </a>
            <p className="text-light fw-bold">GitHub</p>
          </div>
          <div className="skill-box  ">
            <a
              href="https:react.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={react} alt="react" className="skills-icon my-3" />
            </a>
            <p className="text-light fw-bold">React js</p>
          </div>
          <div className="skill-box  ">
            <a href="https://jquery.com/" target="_blank" rel="noreferrer">
              <img src={jquery} alt="jquery" className="skills-icon my-3" />
            </a>
            <p className="text-light fw-bold">jquery</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
