import React, {useEffect, useState} from 'react'
import Logo from "../../Assets/h2-code-logo.png";
function Navbar() {
   const [openNav, setOpenNav] = useState(false);

   const handleTogglerNav = () => {
     setOpenNav(!openNav);
    
     if(openNav) {
       document.body.style.overflow = "auto";
      }else {
       document.body.style.overflow = "hidden";

     }
   };

   const handleClickOnLink = ()=> {
    setOpenNav(false);
      document.body.style.overflow = "auto";
   }

   const addClassToNavbarScroll =()=>{
  window.addEventListener('scroll', ()=>{
      if (window.scrollY > 0) {
        document.querySelector(".navbar").classList.add("scroll");
      } else {
        document.querySelector(".navbar").classList.remove("scroll");
      }
  })
   }

   useEffect(() => {
    
    addClassToNavbarScroll();
   }, []);
   

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top py-3 nav">
        <div class="container-fluid">
          <a className="navbar-brand " href="/" target="_self">
            <img className="logo" src={Logo} alt="Logo" />
            <span className="text-light textLogo">H2Code</span>
          </a>
          <button
            className="navbar-toggler text-light customNavToggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {openNav ? (
              <span onClick={handleTogglerNav} className="toggler-icon">
                <i className="fa-solid fa-xmark fa-fx"></i>
              </span>
            ) : (
              <span onClick={handleTogglerNav} className="toggler-icon">
                <i className="fa-solid fa-bars fa-fx"></i>
              </span>
            )}
          </button>
          <div
            className={`d-flex customCollapse ${openNav && "open"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  me-4 custom-ul">
              <li className="nav-item">
                <a
                  className="nav-link text-light fs-5"
                  href="#about"
                  onClick={handleClickOnLink}
                >
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link text-light fs-5"
                  href="#work"
                  onClick={handleClickOnLink}
                >
                  Work
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link text-light fs-5"
                  href="#skills"
                  onClick={handleClickOnLink}
                >
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-light fs-5 "
                  href="#contact"
                  onClick={handleClickOnLink}
                >
                  Contact
                </a>
              </li>
            </ul>
            <a
              className="nav-link link-download"
              href="./Assets/cvresume.pdf"
              download={true}
            >
              <button className="btn btn-light  btn-download">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </nav>
      {openNav && <div className="overlay"></div>}
    </>
  );
}

export default Navbar