import React, { useState } from "react";
//import Modal from "react-modal";
import Button from "../components/Buttons";
import { getAssetPath } from "../components/paths";
import "../labs/mouseFollwer.jsx";
import MouseFollower from "../labs/mouseFollwer.jsx";

//modal.setAppElement("#root");

export default function Playground() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const PopupModal = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>X</button>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="playground-wrap">
      <p className="eyebrow">R&D</p>
      <h1 className="page-title">Playground</h1>
      <p className="lede">Segments of code that I'm experimenting with.</p>

      <div className="Labs">

        <div className="glass-card">
          <Button
            className="glass"
            title="Spotlight"
            image={getAssetPath("gifs/spotlight-preview.png")}
            previewGif={getAssetPath("gifs/spotlight.gif")}
            onClick={() => setModalIsOpen(true)}
            aria-label="Open modal"
          />
          <PopupModal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
          >
            <MouseFollower />
            <h2>Spotlight following the mouse</h2>
            <p>To eventually be used as a visual effect in the movie club website.</p>
          </PopupModal>
          <Button
            className="glass"
            title="Glass card"
            image={getAssetPath("images/bulb.jpeg")}
            onClick={() => console.log("Glass card clicked!")}
            aria-label="Popout Modal"
          >
            <p>This is a popout modal.</p>
          </Button>
          <Button
            className="glass"
            title="Glass card"
            image={getAssetPath("images/bulb.jpeg")}
            onClick={() => console.log("Glass card clicked!")}
          />
          <Button
            className="glass"
            title="Glass card"
            image={getAssetPath("images/bulb.jpeg")}
            onClick={() => console.log("Glass card clicked!")}
          />
          <Button
            className="glass"
            title="Glass card"
            image={getAssetPath("images/bulb.jpeg")}
            onClick={() => console.log("Glass card clicked!")}
          />
        </div>
      </div>
    </div>
  );
}

