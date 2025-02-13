import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Contact() {
  return <>
    <div className="contact-background">
    <div className="github-container">
    <h2 className="contact-me">Contact me</h2>
      {/* Contact Links */}
      <div className="contact-links">
        {/* Email */}
        <a href="mailto:radin00@hotmail.com" title="Email">
          <FaEnvelope />
        </a>

        {/* GitHub */}
        <a href="https://github.com/Ramdao" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/tashrif-radin-ali-a54b6b252/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
      </div>

      {/* GitHub Stats */}
      <div className="stats">
        <p>GitHub Stats</p>
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Ramdao&theme=radical"
          alt="GitHub Streak Stats"
        />
      </div>
    </div>
    </div>
    </>
}
