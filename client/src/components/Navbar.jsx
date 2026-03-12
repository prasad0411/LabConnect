import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <Link to="/" className="navbar-brand">🔬 LabConnect</Link>
        <ul className="navbar-links">
          <li><Link to="/labs">Browse Labs</Link></li>
          <li><Link to="/labs/new">Post a Lab</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
