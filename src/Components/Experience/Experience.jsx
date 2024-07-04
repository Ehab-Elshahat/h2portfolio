import React from 'react'

function Experience() {
  return (
    <section className="experience py-5" id="experience">
      <div className="container">
        <h5 className="section-title">Experience</h5>
        <p className="text-center text-light lead mt-4 mb-0">
          Here is a quick summary of my most recent experiences:
        </p>
        <div className="row mx-md-5 ">
          <div className="ex-box">
            <div className="company ">
              <h3 className="">qemma-soft</h3>
            </div>
            <div className="info ">
              <h3 className="h4 ">Front End Developer</h3>
              <p className="lead fst-italic">
                i work as a front end developer with qemma-soft (html, css,
                javascript, bootstrap)
              </p>
              <p className="lead fst-italic">
                To implement several specific projects in a specific period
              </p>
            </div>
            <div className="data ">
              <p className="date"> 4/2023 - 8/2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience