import React from "react";


import Navbar from "./components/Navbar";
import About from "./sections/About";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Education from "./sections/Education";

import Footer from "./sections/Footer";



import Hero from "./sections/Hero";
import MySkills from "./sections/MySkills";
import Projects from "./sections/Projects";





export default function App() {
  return (
    <>
  
    <Navbar/>
     
     
      
      <Hero/>
       <About/>
       
       <Education/>
       
       <MySkills/>
       <Projects/>
      
       <Certificates/>
       <Contact/>
      
       <Footer/>
      
      
      

      
    </>
  );
}
