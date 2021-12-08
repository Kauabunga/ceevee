import React from "react";
import Header from "../Header";
import Introduction from "../Introduction";
import Experience from "../Experience";
import Education from "../Education";
import Projects from "../Projects";
import Interests from "../Interests";
import Footer from "../Footer";

export default function App() {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>

      <div className="content-container">
        <div className="introduction-container">
          <Introduction />
        </div>
        <div className="experience-container">
          <Experience />
        </div>
        <div className="education-container">
          <Education />
        </div>
        <div className="project-container">
          <Projects />
        </div>
        <div className="interests-container">
          <Interests />
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
}
