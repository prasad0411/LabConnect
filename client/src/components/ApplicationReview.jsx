import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './ApplicationReview.css';

function ApplicationReview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [lab, setLab] = useState(null);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  const isProfessor = user && user.role === 'professor';

  useEffect(() => {
    async function fetchData() {
      try {
        const labRes = await fetch(`/api/labs/${id}`);
        if (!labRes.ok) throw new Error('Lab not found');
        const labData = await labRes.json();
        setLab(labData);

        const appRes = await fetch(`/api/applications?labId=${id}`);
        if (!appRes.ok) throw new Error('Failed to load applications');
        const appData = await appRes.json();
        setApplications(appData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const handleStatusChange = useCallback(async (appId, newStatus) => {
    const label = newStatus === 'accepted' ? 'accept' : 'decline';
    if (!window.confirm(`Are you sure you want to ${label} this applicant?`))
      return;
    try {
      const response = await fetch(`/api/applications/${appId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update status');
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

  if (loading) return <p className="loading-text">Loading...</p>;
  if (error) return <p className="empty-text">{error}</p>;

  return (
    <div className="app-review-page">
      <button
        type="button"
        className="btn btn-back"
        onClick={() => navigate(`/labs/${id}`)}
      >
        ← Back to Lab
      </button>
      <h1>Applications for {lab?.name}</h1>
      <p className="app-review-subtitle">
        {isProfessor
          ? 'Review and manage incoming applications'
          : 'View submitted applications for this lab'}
      </p>

      <nav className="app-review-filters">
        {['all', 'pending', 'accepted', 'declined'].map((status) => (
          <button
            key={status}
            type="button"
            className={`app-review-filter-btn ${filter === status ? 'app-review-filter-active' : ''}`}
            onClick={() => setFilter(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)} ({counts[status]}
            )
          </button>
        ))}
      </nav>

      {filteredApplications.length === 0 ? (
        <p className="empty-text">No {filter} applications found.</p>
      ) : (
        <div className="app-review-list">
          {filteredApplications.map((app) => (
            <div key={app._id} className="app-review-card">
              <div className="app-review-card-header">
                <div>
                  <h3 className="app-review-student">{app.studentName}</h3>
                  <span className="app-review-match">
                    {app.matchScore}% match
                  </span>
                </div>
                <span
                  className={`application-status ${
                    app.status === 'accepted'
                      ? 'status-accepted'
                      : app.status === 'declined'
                        ? 'status-declined'
                        : 'status-pending'
                  }`}
                >
                  {app.status}
                </span>
              </div>

              {app.studentProfile && (
                <div className="app-review-profile">
                  {app.studentProfile.skills?.length > 0 && (
                    <div className="app-review-skills">
                      <strong>Skills: </strong>
                      {app.studentProfile.skills.map((s) => (
                        <span
                          key={s}
                          className={`skill-tag ${lab?.skills_needed?.some((ls) => ls.toLowerCase() === s.toLowerCase()) ? 'skill-match' : ''}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="app-review-meta-row">
                    {app.studentProfile.gpaRange && (
                      <span>
                        <strong>GPA:</strong> {app.studentProfile.gpaRange}
                      </span>
                    )}
                    {app.studentProfile.availability && (
                      <span>
                        <strong>Availability:</strong>{' '}
                        {app.studentProfile.availability}
                      </span>
                    )}
                    {app.studentProfile.resume_url && (
                      <a
                        href={app.studentProfile.resume_url}
                        target="_blank"
                        rel="noreferrer"
                        className="app-review-resume"
                      >
                        View Resume
                      </a>
                    )}
                  </div>
                </div>
              )}
              <div className="app-review-statement">
                <h4>Personal Statement</h4>
                <p>{app.statement}</p>
              </div>

              <div className="app-review-card-footer">
                <time className="app-review-date">
                  Received: {new Date(app.createdAt).toLocaleDateString()}
                </time>

                {isProfessor && app.status === 'pending' && (
                  <div className="app-review-actions">
                    <button
                      type="button"
                      className="btn btn-accept"
                      onClick={() => handleStatusChange(app._id, 'accepted')}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleStatusChange(app._id, 'declined')}
                    >
                      Decline
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ApplicationReview.propTypes = {};

export default ApplicationReview;
