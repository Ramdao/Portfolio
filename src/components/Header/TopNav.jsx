export default function TopNav({ scrollToSection }) {
    return (
      <div className="topNav">
        <p>Tashrif Radin Ali</p>
        <div className="navLinks">
          <a onClick={() => scrollToSection("about")}>About</a>
          <a onClick={() => scrollToSection("skills")}>Skills</a>
          <a onClick={() => scrollToSection("projects")}>Projects</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
          <a href="https://drive.google.com/file/d/15d1j7rblKCJGsYbVwWiFIJTfw86qym96/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    );
  }
  