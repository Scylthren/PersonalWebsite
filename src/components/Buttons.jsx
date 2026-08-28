import React, { useState } from "react";

export default function Button({ children, title, image, previewGif, onClick, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    backgroundImage: `url(${isHovered && previewGif ? previewGif : image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <button
      className={`glass-button ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={style}
    >
      <div className="glass-overlay"></div>
      <span className="glass-title">{title || children}</span>
      {title || children}
    </button>
  );
}