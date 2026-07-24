import './Background.css';

const Background = ({ children }) => {
  return (
    <div className="background-wrapper">
      {/* Layer 1: Blinking Stars */}
      <div className="stars"></div>
      
      {/* Layer 2: Moving Ambient Orbs */}
      <div className="moving-object orb-1"></div>
      <div className="moving-object orb-2"></div>
      <div className="moving-object orb-3"></div>

      {/* Layer 3: Your Website Content */}
      <div className="content-layer">
        {children}
      </div>
    </div>
  );
};

export default Background;