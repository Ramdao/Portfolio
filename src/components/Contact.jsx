import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Contact() {
  const [imgSrc, setImgSrc] = useState("https://github-readme-streak-stats.herokuapp.com/?user=Ramdao&theme=radical");
  const [errorCount, setErrorCount] = useState(0);
  const maxRetries = 5; // Maximum retry attempts

  useEffect(() => {
    const retryImageLoad = () => {
      if (errorCount < maxRetries) {
        setErrorCount(prev => prev + 1);
      } else {
        setImgSrc("/images/gitstatbackup.png"); // Fallback after max retries
      }
    };

    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      // If image loads successfully, reset error count
      setErrorCount(0);
    };
    img.onerror = retryImageLoad; // Retry on error

    // Cleanup: clear the retry on unmount
    return () => clearTimeout(retryImageLoad);
  }, [imgSrc, errorCount]);

  return (
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
            src={imgSrc}
            alt="GitHub Streak Stats"
            onError={() => {
              if (errorCount < maxRetries) {
                setTimeout(() => setImgSrc("https://github-readme-streak-stats.herokuapp.com/?user=Ramdao&theme=radical"), 3000); // Retry with delay
              } else {
                setImgSrc("/images/gitstatbackup.png"); // After max retries, use fallback image
              }
            }}
          />
          {errorCount > 0 && errorCount < maxRetries && <p>Retrying... {errorCount}/{maxRetries}</p>}
        </div>
      </div>
    </div>
  );
}
