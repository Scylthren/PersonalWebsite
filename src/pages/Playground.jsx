import Button from "../components/Buttons";
import { getAssetPath } from "../components/paths";

export default function Playground() {
  return (
    <div className="wrap">
      <p className="eyebrow">R&D</p>
      <h1 className="page-title">Playground</h1>
      <p className="lede">Segments of code that I'm experimenting with.</p>

      <div className="Labs">
        <>
          <Button
            className="glass"
            title="Glass button"
            image={getAssetPath("images/bulb.jpeg")}
            onClick={() => console.log("Glass button clicked!")}
          />
        </>
      </div>
    </div>
  );
}

