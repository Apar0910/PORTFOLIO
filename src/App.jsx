import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import { projects } from "./projects";

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">

      <Navbar />

      <header className="hero">
        <h1>MISSION CONTROL</h1>
        <p>Mechanical Engineer • Aerospace • Propulsion • AI</p>
      </header>

      <section id="profile" className="grid">
        <div className="card">
          <h2>Engineering Profile</h2>
          <p>
            Passionate engineer building aerospace, AI and advanced engineering systems.
          </p>
        </div>
      </section>

      <section id="projects" className="grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelected(project)}
            style={{ cursor: "pointer" }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <section id="lab" className="grid">
        <div className="card">
          <h2>Simulation Lab</h2>
          <p>Coming Soon...</p>
        </div>
      </section>

      <section id="contact" className="grid">
        <div className="card">
          <h2>Contact</h2>
          <p>Email: your@email.com</p>
        </div>
      </section>

      {selected && (
        <div className="popup" onClick={() => setSelected(null)}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>

            <button onClick={() => setSelected(null)}>
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;