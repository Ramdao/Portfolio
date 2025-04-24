import { useState, useEffect } from 'react';

const messages = [
  '< Full Stack Developer />',
  '< Frontend Enthusiast />',
  '< Backend Enthusiast />',
  '< Passionate Coder />',
];

export default function Title() {
  const [currentText, setCurrentText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCharIndex(prev => prev - 1);
      } else {
        setCharIndex(prev => prev + 1);
      }

      if (!isDeleting && charIndex === currentMessage.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }
    }, typingSpeed);

    setCurrentText(currentMessage.substring(0, charIndex));

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, messageIndex]);

  return (
    <>
      <div className="title-Container">
        <h2>Hi! My Name Is</h2>
        <h1>Tashrif Radin Ali</h1>
        <h2 className="typewriter">
          <span>{currentText}<span className="cursor">|</span></span>
        </h2>
      </div>
      <p className="title-info">
        I am an enthusiastic programmer and web developer, passionate about bringing my <br />
        creations to life on the screen. My goal is to design and build user-friendly, visually <br />
        appealing websites that effectively showcase clients' ideas and markets.
      </p>
    </>
  );
}
