import './SplineBackground.css';

const SplineBackground = () => {
  return (
    <div className="spline-bg">
      <spline-viewer
        url="https://prod.spline.design/eT-FhUCAE2UZWE1b/scene.splinecode"
        events-target="global"
      ></spline-viewer>
      {/* Transparent overlay to block Spline's internal scroll/pointer listeners */}
      <div className="spline-bg__overlay" />
    </div>
  );
};

export default SplineBackground;
