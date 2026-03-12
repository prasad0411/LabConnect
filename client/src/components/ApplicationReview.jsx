import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './ApplicationReview.css';

function ApplicationReview({ labId, labName }) {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  const fetchApplications = useCallback(async () => {
    if (!labId) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/applications?labId=${labId}`);
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
  }, [labId]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const handleStatusChange = useCallback(async (appId, newStatus) => {
    try {
      const response = await fetch(`/api/applications/${appId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update application status');
      }

      setApplications((prev) =>
        prev.map((app) =>
          app._id === appId ? { ...app, status: newStatus } : app,
        ),
      );
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const filteredApplications =
    filter === 'all'
      ? applications
      : applications.filter((app) => app.status === filter);

  const counts = {
    all: applications.length,
    pending: applications.filter((a) => a.status === 'pending').length,
    accepted: applications.filter((a) => a.status === 'accepted').length,
    declined: applications.filter((a) => a.status === 'declined').length,
  };

  if (loading) {
    return <p className="app-review-loading">Loading applications...</p>;
  }

  if (error) {
    return <p className="app-review-error">{error}</p>;
  }

  return (
    <section className="app-review-container">
      <h2 className="app-review-title">Applications for {labName}</h2>

      <nav className="app-review-filters">
        {['all', 'pending', 'accepted', 'declined'].map((status) => (
          <button
            key={status}
            type="button"
            className={`app-review-filter-btn ${
              filter === status ? 'app-review-filter-btn-active' : ''
            }`}
            onClick={() => setFilter(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)} ({counts[status]}
            )
          </button>
        ))}
      </nav>

      {filteredApplications.length === 0 ? (
        <p className="app-review-empty">No {filter} applications found.</p>
      ) : (
        <ul className="app-review-list">
          {filteredApplications.map((app) => (
            <li key={app._id} className="app-review-card">
              <div className="app-review-card-header">
                <div>
                  <h3 className="app-review-student-name">{app.studentName}</h3>
                  <span className="app-review-match">
                    Match: {app.matchScore}%
                  </span>
                </div>
                <span
                  className={`app-review-status app-review-status-${app.status}`}
                >
                  {app.status}
                </span>
              </div>

              <div className="app-review-statement-section">
                <h4 className="app-review-statement-label">
                  Personal Statement
                </h4>
                <p className="app-review-statement-text">{app.statement}</p>
              </div>

              <div className="app-review-card-footer">
                <time className="app-review-date">
                  Received: {new Date(app.createdAt).toLocaleDateString()}
                </time>

                {app.status === 'pending' && (
                  <div className="app-review-actions">
                    <button
                      className="app-review-btn app-review-btn-accept"
                      type="button"
                      onClick={() => handleStatusChange(app._id, 'accepted')}
                    >
                      Accept
                    </button>
                    <button
                      className="app-review-btn app-review-btn-decline"
                      type="button"
                      onClick={() => handleStatusChange(app._id, 'declined')}
                    >
                      Decline
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

ApplicationReview.propTypes = {
  labId: PropTypes.string.isRequired,
  labName: PropTypes.string.isRequired,
};

export default ApplicationReview;
