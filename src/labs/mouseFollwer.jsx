import React, { useRef } from "react";
import { useMouse } from "react-use";
import "../index.css";

export default function MouseFollower() {
  const containerRef = useRef(null);
  const { docX, docY } = useMouse(containerRef);

  return (
    <div
      ref={containerRef}
      className="mouse-spotlight"
      style={{ "--x": `${docX}px`, "--y": `${docY}px` }}
    />
  );
}