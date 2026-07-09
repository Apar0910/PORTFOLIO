import { useScrollReveal } from "../hooks/useScrollAnimations";

function Profile() {
  const reveal = useScrollReveal({ threshold: 0.1 });
  const eduReveal1 = useScrollReveal({ threshold: 0.1 });

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
        
        {/* Main Info Card - Occupying complete width */}
        <div className="card profile-main-card profile-full-width">
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
          
          <div className="resume-btn-container">
            <a 
              href="./resume.pdf" 
              download="ARuroNex_Resume.pdf"
              className="btn-primary resume-btn"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="download-icon"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Education Section */}
        <div className="section-divider education-section-divider">
          <div className="line" />
          <span className="label">Education</span>
        </div>

        <div className="education-timeline">
          <div 
            ref={eduReveal1.ref} 
            className={`card education-card scroll-reveal ${eduReveal1.isVisible ? "visible" : ""}`}
          >
            <div className="education-header">
              <div className="education-title-group">
                <h3>B.Tech. in Mechanical Engineering</h3>
                <div className="education-institution">Bhagalpur College of Engineering</div>
              </div>
              <span className="education-date">2020 - 2024</span>
            </div>
            <p>
              Focused on core mechanical principles, computational analysis, fluid machinery, and automotive systems.
            </p>
            <ul>
              <li><strong>Academic Standing:</strong> CGPA 7.12 / 10</li>
              <li>Completed capstone project on design and fabrication of an efficient solar tracking system.</li>
              <li>Coursework: Fluid Mechanics, Heat & Mass Transfer, CAD/CAM, Power Plant Engineering.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
