import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import TopNav from "./components/Header/TopNav";
import Title from "./components/Header/Title";
import Button from "./components/Button";
import Card from "./components/Card";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import MoonCanvas from "./components/MoonCanvas"
import MeteorCanvas from "./components/MeteorCanvas";

function AnimatedSection({ children, initialX = 0, initialY = 0, sectionRef }) {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { triggerOnce: false, margin: "-30px" });

  return (
    <motion.div
      ref={(el) => {
        animationRef.current = el;
        if (sectionRef) sectionRef.current = el;
      }}
      initial={{ x: initialX, y: initialY, opacity: 0 }}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : { x: initialX, y: initialY, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const scrollToSection = (section) => {
    const targetRef =
      section === "about"
        ? aboutRef
        : section === "skills"
        ? skillsRef
        : section === "projects"
        ? projectsRef
        : section === "contact"
        ? contactRef
        : null;

    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  };

  return (
    <>
     <MeteorCanvas />
      {/* Top Navigation */}
      <TopNav scrollToSection={scrollToSection} />

      {/* Title Section */}
      <AnimatedSection initialX={-100}>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "2rem",
      position: "relative", 
    }}
  >
    <div style={{ flex: 1 }}>
      <Title />
    </div>

  
    <div
      style={{
        position: "absolute", 
        top: isMobile ? "32rem" : "10rem",
        right: isMobile ? "2rem" : "3rem",
        width: "40vw",
        height: "40vw",
        maxWidth: "350px",
        maxHeight: "350px",
        transform: "translate(-5rem, 5rem)",  
      }}
    >
      <MoonCanvas />
    </div>
  </div>
</AnimatedSection>

      {/* Buttons */}
      <AnimatedSection initialY={50}>
        <Button href="https://drive.google.com/file/d/15d1j7rblKCJGsYbVwWiFIJTfw86qym96/view?usp=sharing">Get My Resume</Button>
        <Button href="https://github.com/Ramdao">GitHub</Button>
        <Button href="https://www.linkedin.com/in/tashrif-radin-ali-a54b6b252/">LinkedIn</Button>
      </AnimatedSection>

      {/* About Me Section */}
      <AnimatedSection initialX={-100} sectionRef={aboutRef}>
        <Card
          title="About Me"
          text="I believe in creating user-friendly web applications that focus on ease of use, appeal, and scalability. I specialize in front-end and back-end development, working with technologies like HTML, CSS, JavaScript, and frameworks like React, ASP.NET, Node.js, and others. Beyond coding, I enjoy solving complex problems and staying updated with the latest web technologies."
        />
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection initialX={-100} sectionRef={skillsRef}>
        <Card title="Skills">
          <Skills />
        </Card>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection initialX={-100} sectionRef={projectsRef}>
        <Card title="Projects">
          <Project />
        </Card>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection initialX={-100} sectionRef={contactRef}>
        <Contact />
      </AnimatedSection>
    </>
  );
}

export default App;
