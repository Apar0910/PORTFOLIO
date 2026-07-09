import { useScrollReveal } from "../hooks/useScrollAnimations";

const skillCategories = [
  {
    title: "Engineering & Hardware",
    icon: "⚙️",
    skills: [
      { name: "CAD Modeling (SolidWorks, Siemens NX)", level: 95 },
      { name: "FEA & CFD Analysis (ANSYS, Star-CCM+)", level: 90 },
      { name: "Thermodynamics & Heat Transfer", level: 85 },
      { name: "Aerodynamics & Propulsion Systems", level: 80 },
      { name: "Rapid Prototyping & DFM", level: 90 },
    ],
  },
  {
    title: "Software & Intelligence",
    icon: "💻",
    skills: [
      { name: "Python (Scientific Stack, PyTorch)", level: 95 },
      { name: "C / C++ (Embedded Systems, Arduino)", level: 85 },
      { name: "ROS (Robot Operating System)", level: 80 },
      { name: "Simulation & Control (MATLAB, Simulink)", level: 85 },
      { name: "Linux, Bash & Version Control (Git)", level: 90 },
    ],
  },
  {
    title: "Machine Learning & Physical AI",
    icon: "🧠",
    skills: [
      { name: "Neural Network Control Loops", level: 85 },
      { name: "Predictive Telemetry & Anomaly Detection", level: 90 },
      { name: "Computer Vision & Object Tracking", level: 80 },
      { name: "Sensor Fusion & State Estimation (Kalman Filters)", level: 75 },
      { name: "High-Performance Computing & GPU Acceleration", level: 70 },
    ],
  },
];

function Skills() {
  const mainReveal = useScrollReveal({ threshold: 0.05 });
  const categoryReveals = skillCategories.map((_, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useScrollReveal({
      threshold: 0.05,
      rootMargin: `0px 0px -${20 + i * 15}px 0px`,
    })
  );

  return (
    <div className="page-container">
      <section
        className={`section section-skills scroll-reveal ${mainReveal.isVisible ? "visible" : ""}`}
        ref={mainReveal.ref}
      >
        <div className="section-divider">
          <div className="line" />
          <span className="label">Capabilities</span>
        </div>
        <h2 className="section-heading">
          Technical <span className="accent">Skills</span> & Expertise
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={categoryReveals[index].ref}
              className={`card skills-card scroll-reveal stagger-${index + 1} ${
                categoryReveals[index].isVisible ? "visible" : ""
              }`}
            >
              <div className="skills-card-header">
                <div className="skills-card-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-detailed">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
