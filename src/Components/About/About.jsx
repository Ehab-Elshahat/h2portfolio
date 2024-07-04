import React from 'react'
import AboutImg  from '../../Assets/heroimg.jpeg'
function About() {
  return (
    <section className="about py-5" id="about">
      <div className="container">
        <h5 className="section-title">About me</h5>
        <div className="row">
          <div className="col-md-6 p-5">
            <div className="img-about">
              <img className="w-100" src={AboutImg} alt="img" />
            </div>
          </div>
          <div className="col-md-6 p-5 text-light">
            <h4 className="mb-4">About me</h4>
            <p className="fst-italic">
              Hello! I'm a dedicated and enthusiastic front-end developer with a
              passion for crafting beautiful, user-friendly websites. With a
              strong foundation in HTML, CSS, and JavaScript, I bring designs to
              life with a focus on functionality and aesthetics.
            </p>
            
            <p className="fst-italic my-4">
              I believe in the power of collaboration and communication. Working
              closely with designers, back-end developers, and clients, I ensure
              that the final product meets all requirements and exceeds
              expectations. I pay close attention to detail and am dedicated to
              delivering high-quality work on time.
            </p>
            <p className="fst-italic my-4">
              I am always open to new opportunities and collaborations. Whether
              you have a project in mind, need a consultation, or just want to
              chat about web development, feel free to reach out. Let's create
              something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About