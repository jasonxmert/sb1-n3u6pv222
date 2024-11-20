"use client";

import { useEffect, forwardRef } from 'react';
import ReactGlobe from 'react-globe.gl';
import * as THREE from 'three';
import { useTheme } from "next-themes";

interface GlobeProps {
  globeRef: any;
  [key: string]: any;
}

const GlobeComponent = forwardRef<any, GlobeProps>(({ globeRef, ...props }, _ref) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (globeRef?.current) {
      const scene = globeRef.current.scene();
      const controls = globeRef.current.controls();

      // Minimal lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      // Configure controls
      if (controls) {
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.5;
        controls.zoomSpeed = 0.8;
        controls.minDistance = 120;
        controls.maxDistance = 500;
        controls.enablePan = true;
        controls.panSpeed = 0.5;
        controls.autoRotate = false;
      }

      // Set renderer background to match theme
      const renderer = globeRef.current.renderer();
      if (renderer) {
        renderer.setClearColor(0x000000, 0);
        renderer.alpha = true;
        renderer.toneMappingExposure = 0.8; // Reduce overall brightness
      }

      // Remove any background elements and ensure transparency
      const domElement = globeRef.current.renderer().domElement;
      domElement.style.background = 'transparent';

      // Clear scene background
      scene.background = null;

      // Animation loop
      let animationFrame: number;
      const animate = () => {
        animationFrame = requestAnimationFrame(animate);
        controls.update();
      };
      animate();

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [globeRef, theme]);

  return (
    <div style={{ background: 'transparent' }}>
      <ReactGlobe ref={globeRef} {...props} />
    </div>
  );
});

GlobeComponent.displayName = 'GlobeComponent';

export default GlobeComponent;