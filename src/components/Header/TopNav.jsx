import { useState } from "react";
import "./TopNav.css"; 

export default function TopNav({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="topNav">
      <p>Tashrif Radin Ali</p>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`navLinks ${menuOpen ? "active" : ""}`}>
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("skills")}>Skills</a>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
        <a onClick={() => scrollToSection("professional")}>Professional</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
        <a
          href="https://drive.google.com/file/d/15d1j7rblKCJGsYbVwWiFIJTfw86qym96/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
