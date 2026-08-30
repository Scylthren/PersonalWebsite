import React, { useState } from "react";
//import Modal from "react-modal";
import Button from "../components/Buttons";
import { getAssetPath } from "../components/paths";
import "../labs/mouseFollwer.jsx";
import MouseFollower from "../labs/mouseFollwer.jsx";
import ThreeStudy from "../labs/threeStudy.jsx";

//modal.setAppElement("#root");

export default function Playground() {
  const [activeModal, setActiveModal] = useState(false);
  
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
            onClick={() => activeModal === "spotlight" ? setActiveModal(false) : setActiveModal("spotlight")}
            aria-label="Open modal"
          />
          <PopupModal
            isOpen={activeModal === "spotlight"}
            onClose={() => setActiveModal(false)}
          >
            <MouseFollower />
            <h2>Spotlight following the mouse</h2>
            <p>To eventually be used as a visual effect in the movie club website.</p>
          </PopupModal>
          <Button
            className="glass"
            title="Rotating Cube"
            image={getAssetPath("gifs/floating-cube-preview.png")}
            previewGif={getAssetPath("gifs/floating_cube.gif")}
            onClick={() => activeModal === "cube" ? setActiveModal(false) : setActiveModal("cube")}
            aria-label="Open modal"
          />
          <PopupModal
            isOpen={activeModal === "cube"}
            onClose={() => setActiveModal(false)}
          >
            <div style={{ width: '100%', height: '400px' }}>
            <ThreeStudy />
            </div>
            <h2>Rotating Cube</h2>
            <p>A simple 3D cube that rotates in space.</p>
          </PopupModal>
        </div>
      </div>
    </div>
  );
}

