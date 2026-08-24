import React from "react";
export default function Button({ children, title, image, onClick, className = "" }) {
    const style = {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
  return (
    <button className={`glass-button ${className}`} onClick={onClick} style={style}>
      <div className="glass-overlay"></div>
      <span className="glass-title">{title || children}</span>
      {title || children}
    </button>
  );
}
