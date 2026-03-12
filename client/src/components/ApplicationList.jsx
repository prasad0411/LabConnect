import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './ApplicationList.css';

function ApplicationList({ profileId }) {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchApplications = useCallback(async () => {
    if (!profileId) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/applications?profileId=${profileId}`);
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
  }, [profileId]);

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
        return 'application-list-status-accepted';
      case 'declined':
        return 'application-list-status-declined';
      default:
        return 'application-list-status-pending';
    }
  };

  if (loading) {
    return <p className="application-list-loading">Loading applications...</p>;
  }

  if (error) {
    return <p className="application-list-error">{error}</p>;
  }

  return (
    <section className="application-list-container">
      <h2 className="application-list-title">My Applications</h2>

      {applications.length === 0 ? (
        <p className="application-list-empty">
          You haven&apos;t applied to any labs yet. Browse labs to find your
          match!
        </p>
      ) : (
        <ul className="application-list">
          {applications.map((app) => (
            <li key={app._id} className="application-list-item">
              <div className="application-list-item-header">
                <h3 className="application-list-lab-name">{app.labName}</h3>
                <span
                  className={`application-list-status ${getStatusClass(app.status)}`}
                >
                  {app.status}
                </span>
              </div>

              {app.matchScore > 0 && (
                <p className="application-list-match">
                  Match: {app.matchScore}%
                </p>
              )}

              <p className="application-list-statement">{app.statement}</p>

              <div className="application-list-item-footer">
                <time className="application-list-date">
                  Applied: {new Date(app.createdAt).toLocaleDateString()}
                </time>
                {app.status === 'pending' && (
                  <button
                    className="application-list-withdraw-btn"
                    type="button"
                    onClick={() => handleWithdraw(app._id)}
                  >
                    Withdraw
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

ApplicationList.propTypes = {
  profileId: PropTypes.string.isRequired,
};

export default ApplicationList;
