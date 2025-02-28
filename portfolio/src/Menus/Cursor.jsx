import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [outerPosition, setOuterPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Delay the outer cursor movement
      setTimeout(() => {
        setOuterPosition({ x: e.clientX, y: e.clientY });
      }, 350);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Outer Cursor (Delayed Movement) */}
      <div
        className="fixed w-[40px] h-[40px] bg-white/20 backdrop-blur-lg rounded-full pointer-events-none  transition-transform duration-300 ease-out  "
        style={{
          left: outerPosition.x,
          top: outerPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Inner Cursor (Instant Movement) */}
      <div
        className="fixed w-[8px] h-[8px] bg-white rounded-full pointer-events-none transition-transform duration-150 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default Cursor;
