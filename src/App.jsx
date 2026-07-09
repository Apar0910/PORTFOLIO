import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Lab from "./pages/Lab";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;