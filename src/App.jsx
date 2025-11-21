
import React, { useRef } from 'react'; // <-- CRITICAL: Import useRef
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";


function App() {

  // 1. DEFINE ALL SECTION REFERENCES (Refs)
  const heroRef = useRef(null);      // Optional, but good practice for "Home"
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // 2. DEFINE THE SCROLLING FUNCTION
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // 3. GROUP ALL REFS TO PASS TO NAV BAR
  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef
  };

  return (
    // <> is acceptable, but wrapping in a main element or just the div is cleaner
    <div className="portfolio-container">

      {/* 4. PASS THE SCROLL LOGIC AND ALL REFS TO THE NAVBAR */}
      <Navbar
        scrollToSection={scrollToSection}
        sectionRefs={sectionRefs} // Passing the grouped object is cleaner
      />

      {/* 5. ATTACH THE REFS TO THEIR RESPECTIVE COMPONENTS */}

      {/* Hero can use a ref for the home link */}
      <Hero ref={heroRef} />

      {/* Ensure all subsequent components are wrapped in forwardRef in their file */}
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />

    </div>
  );
}

export default App;