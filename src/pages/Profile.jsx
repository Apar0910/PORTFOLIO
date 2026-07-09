import { useScrollReveal } from "../hooks/useScrollAnimations";

function Profile() {
  const reveal = useScrollReveal({ threshold: 0.15 });

  return (
    <div className="page-container">
      <section 
        className={`section section-profile scroll-reveal ${reveal.isVisible ? "visible" : ""}`}
        ref={reveal.ref}
      >
        <div className="section-divider">
          <div className="line" />
          <span className="label">Engineering Profile</span>
        </div>
        
        <div className="profile-grid">
          {/* Main Info Card */}
          <div className="card profile-main-card">
            <h2>About Me</h2>
            <p>
              I am a mechanical engineer focused on the intersection of aerospace hardware and 
              artificial intelligence. I design high-performance systems for extreme environments, 
              bringing analytical rigor and software expertise to traditional mechanical disciplines.
            </p>
            <div className="profile-details-list">
              <div className="detail-item">
                <strong>Location:</strong>
                <span>Remote / Global</span>
              </div>
              <div className="detail-item">
                <strong>Focus:</strong>
                <span>Aerospace propulsion, robotic control loops, ML applications</span>
              </div>
            </div>
          </div>

          {/* Specializations & Skills Card */}
          <div className="card profile-skills-card">
            <h2>Core Competencies</h2>
            <div className="skills-group">
              <h3>Engineering</h3>
              <div className="skills-tags">
                <span>CAD Modeling</span>
                <span>FEA / CFD Analysis</span>
                <span>Thermodynamics</span>
                <span>Aerodynamic Systems</span>
                <span>Rapid Prototyping</span>
              </div>
            </div>
            
            <div className="skills-group">
              <h3>Software & Intelligence</h3>
              <div className="skills-tags">
                <span>Python</span>
                <span>C++ / Arduino</span>
                <span>PyTorch & ML</span>
                <span>Simulation (MATLAB)</span>
                <span>ROS (Robot OS)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
