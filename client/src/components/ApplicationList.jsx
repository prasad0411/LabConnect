import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './ApplicationList.css';

function ApplicationList() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const profileId = localStorage.getItem('labconnect_profile_id');

  const fetchApplications = useCallback(async () => {
    if (!profileId) {
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(`/api/applications?profileId=${profileId}`);
      if (!response.ok) throw new Error('Failed to load applications');
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
    if (!window.confirm('Withdraw this application?')) return;
    try {
      const response = await fetch(`/api/applications/${appId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to withdraw application');
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

  if (!profileId) {
    return (
      <div className="application-list-empty">
        <h1>My Applications</h1>
        <p>Create a profile to start applying to labs.</p>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => navigate('/profile/create')}
        >
          Create Profile
        </button>
      </div>
    );
  }

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