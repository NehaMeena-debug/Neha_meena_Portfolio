import { useState, useEffect } from "react";

const RandomTextEffect = () => {
  const originalText = "WELCOME TO MY PORTFOLIO";
  const [displayText, setDisplayText] = useState(originalText);

  
  const getRandomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const getRandomText = () => {
    return originalText.split("").map((char, index) => 
      index === 0 ? char : char === " " ? " " : getRandomChar()
    );
  };

  
  useEffect(() => {
    setDisplayText(getRandomText());
    setTimeout(() => setDisplayText(originalText), 400);
  }, []);

  const handleHover = () => {
    setDisplayText(getRandomText());
    setTimeout(() => setDisplayText(originalText),100);
  };

  const handleMouseDown = () => setDisplayText(getRandomText());
  const handleMouseUp = () => setDisplayText(originalText);

  return (
    <h1
      onMouseEnter={handleHover}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="overflow-hidden py-2 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mix-blend-difference"
    >
      {displayText}
    </h1>
  );
};

export default RandomTextEffect;
