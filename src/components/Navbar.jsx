import { Link } from "react-router-dom";
import logo from "../assets/bharatverse-logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        <img
          src={logo}
          alt="BharatVerse"
        />
      </Link>

      <div className="navbar-links">
        <Link to="/explore">Explore</Link>
        <Link to="/artisans">Artisans</Link>
        <Link to="/ai-guide">AI Guide</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/favorites">Favorites</Link>
      </div>

    </nav>
  );
}