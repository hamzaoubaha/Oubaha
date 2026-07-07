import { useEffect, useState } from 'react';
import './SplineBackground.css';

const SplineBackground = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Only load Spline on desktop devices to improve mobile performance
    if (window.innerWidth > 768) {
      setShouldLoad(true);
      
      // Dynamically load the Spline viewer script only when needed
      const scriptId = 'spline-viewer-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.12.69/build/spline-viewer.js';
        document.head.appendChild(script);
      }
    }
  }, []);

  if (!shouldLoad) return null;

  return (
    <div className="spline-bg">
      <spline-viewer 
        url="https://prod.spline.design/eT-FhUCAE2UZWE1b/scene.splinecode"
      ></spline-viewer>
    </div>
  );
};

export default SplineBackground;
