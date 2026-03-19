import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    await logout();
    navigate('/login');
  }, [logout, navigate]);

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <Link to="/" className="navbar-brand">
          🔬 LabConnect
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/labs">Browse Labs</Link>
          </li>
          {user && user.role === 'professor' && (
            <li>
              <Link to="/labs/new">Post a Lab</Link>
            </li>
          )}
          {user && user.role === 'student' && (
            <>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
              <li>
                <Link to="/applications">My Applications</Link>
              </li>
            </>
          )}
          {user ? (
            <li>
              <button
                type="button"
                className="navbar-logout"
                onClick={handleLogout}
              >
                Logout ({user.name})
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

Navbar.propTypes = {};

export default Navbar;
