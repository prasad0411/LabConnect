import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';
import './ApplicationList.css';

function ApplicationList() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchApplications = useCallback(async () => {
    try {
      const response = await fetch('/api/applications?mine=true');
      if (!response.ok) {
        throw new Error('Failed to load applications');
      }
      const data = await response.json();
      setApplications(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const handleWithdraw = useCallback(async (appId) => {
    if (!window.confirm('Withdraw this application?')) {
      return;
    }

    try {
      const response = await fetch(`/api/applications/${appId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to withdraw application');
      }

      setApplications((prev) => prev.filter((app) => app._id !== appId));
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case 'accepted':
        return 'status-accepted';
      case 'declined':
        return 'status-declined';
      default:
        return 'status-pending';
    }
  };

  if (loading) return <p className="loading-text">Loading applications...</p>;

  return (
    <div className="application-list-page">
      <div className="application-list-header">
        <h1>My Applications</h1>
        <p>Track your lab applications and their status</p>
      </div>

      {error && <p className="application-list-error">{error}</p>}

      {applications.length === 0 ? (
        <p className="empty-text">
          You haven&apos;t applied to any labs yet. Browse labs to find your
          match!
        </p>
      ) : (
        <div className="application-list-grid">
          {applications.map((app) => (
            <div key={app._id} className="application-card">
              <div className="application-card-header">
                <div>
                  <h3 className="application-card-lab">{app.labName}</h3>
                  {app.matchScore > 0 && (
                    <span className="application-card-match">
                      {app.matchScore}% match
                    </span>
                  )}
                </div>
                <span
                  className={`application-status ${getStatusClass(app.status)}`}
                >
                  {app.status}
                </span>
              </div>

              <p className="application-card-statement">{app.statement}</p>

              <div className="application-card-footer">
                <time className="application-card-date">
                  Applied: {new Date(app.createdAt).toLocaleDateString()}
                </time>
                {app.status === 'pending' && (
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleWithdraw(app._id)}
                  >
                    Withdraw
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ApplicationList.propTypes = {};

export default ApplicationList;
