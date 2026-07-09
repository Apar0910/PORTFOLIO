import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      {/* ── Redesigned Hero Section ── */}
      <div className="hero-page">
        <header className="hero-redesign">
          {/* Background glow layers */}
          <div className="hero-glow-container">
            <div className="hero-glow hero-glow-1" />
            <div className="hero-glow hero-glow-2" />
            <div className="hero-glow hero-glow-3" />
          </div>

          <div className="hero-grid">
            {/* Left Column: Text Content */}
            <div className="hero-text-side">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                <span>Portfolio 2026</span>
              </div>
              <h1>MISSION CONTROL</h1>
              <p className="hero-subtitle">Mechanical Engineer • Aerospace • Propulsion • AI</p>
              <p className="hero-description">
                Pioneering advanced propulsion concepts, orbital mechanical structures, and 
                machine learning integrations for next-generation space exploration and automated systems.
              </p>
              <div className="hero-actions">
                <button 
                  className="btn-primary" 
                  onClick={() => navigate("/projects")}
                >
                  Explore Projects
                </button>
                <button 
                  className="btn-secondary" 
                  onClick={() => navigate("/contact")}
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Isometric Graphic */}
            <div className="hero-image-side">
              {/* Orbital rings SVG in the background of the image */}
              <div className="hero-rings-back">
                <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMax meet">
                  <defs>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(110,168,255,0.05)" />
                      <stop offset="50%" stopColor="rgba(110,168,255,0.4)" />
                      <stop offset="100%" stopColor="rgba(110,168,255,0.05)" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <ellipse
                    cx="400"
                    cy="200"
                    rx="280"
                    ry="120"
                    fill="none"
                    stroke="url(#ringGrad)"
                    strokeWidth="0.8"
                    filter="url(#glow)"
                    className="hero-ring ring-1"
                  />
                  <ellipse
                    cx="400"
                    cy="200"
                    rx="180"
                    ry="70"
                    fill="none"
                    stroke="rgba(110,168,255,0.2)"
                    strokeWidth="0.5"
                    className="hero-ring ring-2"
                  />
                  <circle r="3" fill="#6ea8ff" filter="url(#glow)">
                    <animateMotion
                      dur="12s"
                      repeatCount="indefinite"
                      path="M 120,200 A 280,120 0 1 1 680,200 A 280,120 0 1 1 120,200"
                    />
                  </circle>
                </svg>
              </div>

              <div className="graphic-container">
                <div className="graphic-glow-backing" />
                <img 
                  src={heroImg} 
                  alt="Mission Control Center Isometric Graphic" 
                  className="hero-graphic-image"
                />
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ── Technical Stats Ribbon ── */}
      <section className="stats-ribbon">
        <div className="stat-item">
          <h3>3+</h3>
          <p>Spacecraft Subsystems</p>
        </div>
        <div className="stat-item">
          <h3>5+</h3>
          <p>Custom ML Models</p>
        </div>
        <div className="stat-item">
          <h3>100%</h3>
          <p>Simulation Fidelity</p>
        </div>
        <div className="stat-item">
          <h3>4+</h3>
          <p>Research Projects</p>
        </div>
      </section>

      {/* ── Engineering Approach Section ── */}
      <section className="philosophy-section">
        <div className="section-divider">
          <div className="line" />
          <span className="label">Philosophy</span>
        </div>
        <h2 className="home-section-heading">Engineering Approach</h2>
        
        <div className="philosophy-grid">
          <div className="card philosophy-card">
            <h3>Verification-First</h3>
            <p>
              Validating structural mechanics, aerodynamics, and combustion profiles in virtual simulations 
              (CFD/FEA) before hardware prototyping to ensure high reliability.
            </p>
          </div>
          <div className="card philosophy-card">
            <h3>Hardware-Software Co-Design</h3>
            <p>
              Co-developing electronics, microcontrollers, and controls adjacent to physical mechanisms, 
              establishing immediate feedback loops via ROS and Arduino interfaces.
            </p>
          </div>
          <div className="card philosophy-card">
            <h3>Machine Learning Loops</h3>
            <p>
              Leveraging neural networks and ML classifiers to interpret telemetry data, detect stress 
              anomalies, and automate thruster gimbal configurations dynamically.
            </p>
          </div>
        </div>
      </section>

      {/* ── Call To Action Route Highlights ── */}
      <section className="route-highlights-section">
        <div className="section-divider">
          <div className="line" />
          <span className="label">Next Steps</span>
        </div>
        
        <div className="highlights-grid">
          <div className="card highlight-card" onClick={() => navigate("/profile")}>
            <div className="highlight-num">01</div>
            <h3>Technical Profile</h3>
            <p>Explore technical competencies, CAD/CFD tools, and software languages.</p>
            <span className="highlight-link">View Profile →</span>
          </div>

          <div className="card highlight-card" onClick={() => navigate("/lab")}>
            <div className="highlight-num">02</div>
            <h3>Simulation Lab</h3>
            <p>Enter the lab to test telemetry simulation scripts and system feedback logs.</p>
            <span className="highlight-link">Enter Lab →</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
