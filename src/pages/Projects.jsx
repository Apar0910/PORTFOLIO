import { useState } from "react";
import { projects } from "../projects";
import { useScrollReveal } from "../hooks/useScrollAnimations";

function Projects() {
  const [selected, setSelected] = useState(null);
  const projectsReveal = useScrollReveal({ threshold: 0.05 });

  // Dynamically initialize reveals for each project card
  const cardReveals = projects.map((_, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useScrollReveal({
      threshold: 0.05,
      rootMargin: `0px 0px -${20 + i * 10}px 0px`,
    })
  );

  return (
    <div className="page-container">
      <section 
        className={`section scroll-reveal ${projectsReveal.isVisible ? "visible" : ""}`}
        ref={projectsReveal.ref}
      >
        <div className="section-divider">
          <div className="line" />
          <span className="label">Projects</span>
        </div>

        <div className="grid">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={cardReveals[index].ref}
              className={`card scroll-reveal stagger-${index + 1} ${
                cardReveals[index].isVisible ? "visible" : ""
              }`}
              onClick={() => setSelected(project)}
              style={{ cursor: "pointer" }}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-explore-hint">Click to expand details →</div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Popup */}
      {selected && (
        <div className="popup" onClick={() => setSelected(null)}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selected.title}</h2>
            <div className="popup-body">
              <p>{selected.description}</p>
              
              {/* Extra mock details to make the page premium and informative */}
              <div className="popup-specs">
                <h3>Technical Details</h3>
                <ul>
                  <li><strong>Status:</strong> Active Research</li>
                  <li><strong>Target:</strong> Aerospace/Autonomous Systems</li>
                  <li><strong>Role:</strong> Lead Mechanical and Systems Designer</li>
                </ul>
              </div>
            </div>
            <button className="btn-close" onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
