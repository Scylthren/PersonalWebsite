import {useEffect, useRef} from "react";
import * as THREE from "three";

function ThreeStudy() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if(!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    container.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    let frameId;
    
    const animate = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
        frameId = requestAnimationFrame( animate );
    };

    animate();

    return () => {
        cancelAnimationFrame(frameId);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        container.removeChild(renderer.domElement);
    };
    }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
  );
}

export default ThreeStudy;