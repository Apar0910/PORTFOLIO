import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="logo">
        ARuroNex
      </NavLink>

      <div className="links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/lab">Lab</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;