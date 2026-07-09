import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollAnimations";

function Lab() {
  const labReveal = useScrollReveal({ threshold: 0.1 });
  const [simRunning, setSimRunning] = useState(false);
  const [logs, setLogs] = useState([
    "System idle. Ready for telemetry simulation...",
    "LDR Sensors connected via COM port 4.",
    "Servo baseline initialized to 90°."
  ]);
  const [telemetry, setTelemetry] = useState({
    chamberPressure: 0,
    hydrogenFlow: 0,
    solarVectorError: 0
  });

  const addLog = (message) => {
    setLogs((prev) => [...prev.slice(-8), `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  const handleSimTrigger = () => {
    if (simRunning) {
      setSimRunning(false);
      addLog("Simulation terminated by user command.");
    } else {
      setSimRunning(true);
      addLog("Initializing propulsion combustion model...");
    }
  };

  useEffect(() => {
    if (!simRunning) return;

    const interval = setInterval(() => {
      const chamberVal = (Math.random() * 15 + 110).toFixed(2);
      const hydrogenVal = (Math.random() * 2 + 15).toFixed(1);
      const errorVal = (Math.random() * 8 - 4).toFixed(2);

      setTelemetry({
        chamberPressure: chamberVal,
        hydrogenFlow: hydrogenVal,
        solarVectorError: errorVal
      });

      const logChance = Math.random();
      if (logChance > 0.7) {
        addLog(`Ignition telemetry status: chamber temperature nominal, error margin ${errorVal}°`);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [simRunning]);

  return (
    <div className="page-container">
      <section 
        className={`section section-lab scroll-reveal-right ${labReveal.isVisible ? "visible" : ""}`}
        ref={labReveal.ref}
      >
        <div className="section-divider">
          <div className="line" />
          <span className="label">Simulation Lab</span>
        </div>

        <div className="lab-dashboard">
          {/* Main Controls Card */}
          <div className="card lab-control-card">
            <h2>Propulsion telemetry</h2>
            <p>Simulating fluid flow and thermal limits in a micro-thruster nozzle.</p>
            
            <div className="simulation-status">
              <span className={`status-dot ${simRunning ? "active" : ""}`} />
              <span className="status-text">
                {simRunning ? "SIMULATION ACTIVE" : "SIMULATION STOPPED"}
              </span>
            </div>

            <button 
              className={`btn-primary sim-btn ${simRunning ? "stop" : "start"}`}
              onClick={handleSimTrigger}
            >
              {simRunning ? "Abort Simulation" : "Run Telemetry Test"}
            </button>
          </div>

          {/* Metrics Displays */}
          <div className="card lab-data-card">
            <h2>Real-time Telemetry</h2>
            <div className="telemetry-grid">
              <div className="metric-box">
                <span className="metric-title">Chamber Pressure</span>
                <span className="metric-value">{simRunning ? `${telemetry.chamberPressure} PSI` : "0 PSI"}</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">Hydrogen Flow Rate</span>
                <span className="metric-value">{simRunning ? `${telemetry.hydrogenFlow} kg/s` : "0.0 kg/s"}</span>
              </div>
              <div className="metric-box">
                <span className="metric-title">Vector Error Deadband</span>
                <span className="metric-value">{simRunning ? `${telemetry.solarVectorError}°` : "0.0°"}</span>
              </div>
            </div>
          </div>

          {/* Glowing Log output */}
          <div className="card lab-log-card">
            <h2>Console Logs</h2>
            <div className="console-output">
              {logs.map((log, index) => (
                <div key={index} className="log-line">
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lab;
