import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

const Width = 2;
const Height = 3;
const Depth = 0.3;

//Attempt at creating a book model with pages that have a paper texture. The book rotates based on the mouse position, and the pages have a subtle paper texture applied to them. The cover is a solid color, and the spine is a cylinder. The book also has an HTML overlay that displays the title and author of the book.

function usePageTexture(){
    const { gl } = useThree();

    return useMemo(() => {
        const canvas = document.createElement("canvas");
        canvas.width = 128;
        canvas.height = 1024;
        const context = canvas.getContext("2d");

        const paperPalette = ["#f4efe6", "#efe4d1", "#e8dcc0", "#f7f2ea"];

        const base = paperPalette[Math.floor(Math.random() * paperPalette.length)];
        context.fillStyle = base;
        context.fillRect(0, 0, canvas.width, canvas.height);

        for (let x = 0; x < canvas.width; x += 4) {
          const shade = Math.random() > 0.5 ? "#d9cdb6" : "#c9b99d";
          context.strokeStyle = shade;
          context.globalAlpha = 0.12 + Math.random() * 0.25;
          context.beginPath();
          context.moveTo(x, 0);
          context.lineTo(x, canvas.height);
          context.stroke();
        }

        for (let i = 0; i < canvas.height; i += 10) {
          const tone = Math.random() > 0.5 ? "#d8c8a5" : "#c7b99a";
          context.strokeStyle = tone;
          context.globalAlpha = 0.18 + Math.random() * 0.35;
          const jitter = Math.random() * 2;
          context.beginPath();
          context.moveTo(0, i + jitter);
          context.lineTo(canvas.width, i + jitter);
          context.stroke();
        }

        context.globalAlpha = 1;

        const paperTexture = new THREE.CanvasTexture(canvas);
        paperTexture.colorSpace = THREE.SRGBColorSpace;
        paperTexture.wrapS = THREE.RepeatWrapping;
        paperTexture.wrapT = THREE.RepeatWrapping;
        paperTexture.repeat.set(1, 1);
        paperTexture.anisotropy = gl.capabilities.getMaxAnisotropy();
        paperTexture.needsUpdate = true;

        return paperTexture;
    }, [gl]);
}

function useSpineTexture(title, author) {
    const { gl } = useThree();

    return useMemo(() => {
        const canvas = document.createElement("canvas");
        canvas.width = 128;
        canvas.height = 1024;
        const context = canvas.getContext("2d");

        context.fillStyle = "#8d5b3d";
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate(Math.PI / 2);
        //context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillStyle = "#f5e9d9";

        const titleFont = "bold 70px Lucida Handwriting, cursive";
        const authorFont = "italic 30px Lucida Handwriting, cursive";
        const separator = "               ";

        context.font = titleFont;
        const titleWidth = context.measureText(title).width;

        context.font = authorFont;
        const authorWidth = context.measureText(author).width;
        const separatorWidth = context.measureText(separator).width;
        
        const totalWidth = titleWidth + separatorWidth + authorWidth;
        let cursorX = -totalWidth / 2;

        context.textAlign = "left";

        context.font = authorFont;
        context.fillText(author, cursorX, 0);
        cursorX += authorWidth;
        context.fillText(separator, cursorX, 0);
        cursorX += separatorWidth;

        context.font = titleFont;
        context.fillText(title, cursorX, 0);
        cursorX += titleWidth;

        context.restore();
        
        const spineTexture = new THREE.CanvasTexture(canvas);
        spineTexture.colorSpace = THREE.SRGBColorSpace;
        spineTexture.anisotropy = gl.capabilities.getMaxAnisotropy();
        spineTexture.needsUpdate = true;

        return spineTexture;
    }, [gl, title, author]);
}

function BookModel({title, author}) {
  const bookRef = useRef();
  const paperTexture = usePageTexture();
  const spineTexture = useSpineTexture(title, author);
  const { pointer, camera } = useThree();
  const [zoomed, setZoomed] = useState(false);

  const coverMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#8d5b3d",
        roughness: 0.92,
        metalness: 0.04,
        side: THREE.DoubleSide,
      }),
    []
  );

  const spineMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: spineTexture,
        roughness: 0.96,
        metalness: 0.03,
        side: THREE.DoubleSide,
      }),
    [spineTexture]
  );

  const pageMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: paperTexture,
        color: "#f9f4ea",
        roughness: 1,
      }),
    [paperTexture]
  );

  // Create an array of materials for the box geometry, using the page material for the sides and the cover material for the front and back
  const boxMaterials = useMemo(
    () => [pageMaterial, coverMaterial, pageMaterial, pageMaterial, coverMaterial, coverMaterial],
    [pageMaterial, coverMaterial]
  );

  useFrame(() => {
    if (!bookRef.current) return;

    const dist = Math.min(1, Math.hypot(pointer.x, pointer.y) * 3); 
    const targetY = pointer.x * 1.5 * dist;
    const targetX = -pointer.y * 0.9 * dist;

  bookRef.current.rotation.y = THREE.MathUtils.lerp(bookRef.current.rotation.y, targetY, 0.08);
  bookRef.current.rotation.x = THREE.MathUtils.lerp(bookRef.current.rotation.x, targetX, 0.08);

    const targetZ = zoomed ? 3 : 5;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);
  });

  //Terrible terrible time spent here
  const spineCurve = Math.PI / 6; // 45°
  const halfSpineCurve = spineCurve / 2;
  const spineRadius = Depth / (2 * Math.sin(spineCurve / 2));
  const spineOffset = spineRadius * Math.cos(spineCurve / 2);

  return (
    <group ref={bookRef} rotation={[0, 0, 0]} position={[-1, 0, 0]} onClick={(e) => {e.stopPropagation(); setZoomed((z) => !z);}}>
      <mesh position={[spineOffset, 0, 0]} material={spineMaterial}>
        <cylinderGeometry args={[spineRadius, spineRadius, Height, 32, 1, true, -Math.PI/2 - halfSpineCurve, (spineCurve - halfSpineCurve) *2  ]} />
      </mesh>

      <mesh position={[Width / 2, 0, Depth / 2]} material={coverMaterial}>
        <planeGeometry args={[Width, Height]} />
      </mesh>

      <mesh position={[Width / 2, 0, 0]} material={boxMaterials}>
        <boxGeometry args={[Width - 0.2, Height - 0.15, .28]} />
      </mesh>

      <mesh position={[Width / 2, 0, -Depth / 2]} material={coverMaterial}>
        <planeGeometry args={[Width, Height]} />
      </mesh>

      <Html
        transform
        position={[Width / 2, 0, Depth / 2 + 0.01]}
        rotation={[0, Math.PI * 2, 0]}
        distanceFactor={6}
        occlude={[bookRef]}
      >
        <div
          style={{
            width: "160px",
            textAlign: "center",
            color: "#F5E9D9",
            fontFamily: "Lucida Handwriting, cursive",
            lineHeight: 1.2,
          }}
        >
            <p style={{ margin: "6px 0 0", fontSize: "12px" }}>{author}</p>
            <h3 style={{ margin: 0, fontSize: "22px" }}>{title}</h3>
        </div>
      </Html>
    </group>
  );
}

export default function BookThree() {

  return (
    <div style={{ width: "100%", height: "420px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.2} color="#be9797" />
        <pointLight position={[3, 3, 3]} color="#5b62e0" intensity={1.2} />
        <BookModel title="The Diary of Jane" author="Breaking Benjamin" />
      </Canvas>
    </div>
  );
}