/** @format */

import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/HeroSection/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";


function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
