import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';
import MatchBadge from './MatchBadge';
import './ApplicationForm.css';

function ApplicationForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [lab, setLab] = useState(null);
  const [profile, setProfile] = useState(null);
  const [statement, setStatement] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const labRes = await fetch(`/api/labs/${id}`);
        if (!labRes.ok) throw new Error('Lab not found');
        setLab(await labRes.json());

        const profileRes = await fetch('/api/profiles/me');
        if (profileRes.ok) {
          setProfile(await profileRes.json());
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setPageLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const userSkills = profile?.skills || [];

  const getMatchScore = useCallback(() => {
    if (!lab || !userSkills.length || !lab.skills_needed.length) return 0;
    const matching = lab.skills_needed.filter((skill) =>
      userSkills.some((us) => us.toLowerCase() === skill.toLowerCase()),
    );
    return Math.round((matching.length / lab.skills_needed.length) * 100);
  }, [lab, userSkills]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError('');

      if (!statement.trim()) {
        setError('Please write a personal statement.');
        return;
      }

      if (statement.trim().length < 50) {
        setError(
          'Your personal statement should be at least 50 characters.',
        );
        return;
      }

      setLoading(true);

      try {
        const applicationData = {
          profileId: profile?._id || '',
          labId: id,
          studentName: user.name,
          labName: lab.name,
          statement: statement.trim(),
          matchScore: getMatchScore(),
        };

        const response = await fetch('/api/applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(applicationData),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to submit application');
        }

        navigate('/applications');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [statement, profile, id, lab, user, getMatchScore, navigate],
  );

  if (pageLoading) return <p className="loading-text">Loading...</p>;
  if (!lab) return <p className="empty-text">Lab not found.</p>;

  if (!profile) {
    return (
      <div className="application-form-page">
        <h1>Apply to {lab.name}</h1>
        <div className="application-form-card">
          <p className="application-form-notice">
            You need to update your profile before you can apply to labs.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => navigate('/profile/create')}
          >
            Create Profile
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="application-form-page">
      <button
        type="button"
        className="btn btn-back"
        onClick={() => navigate(`/labs/${id}`)}
      >
        ← Back to Lab
      </button>
      <h1>Apply to {lab.name}</h1>
      <div className="application-form-card">
        <div className="application-form-lab-info">
          <div>
            <p className="application-form-professor">{lab.professor}</p>
            <span className="application-form-department">
              {lab.department}
            </span>
          </div>
          <MatchBadge userSkills={userSkills} labSkills={lab.skills_needed} />
        </div>

        <div className="application-form-skills">
          {lab.skills_needed.map((skill) => (
            <span
              key={skill}
              className={`skill-tag ${userSkills.some((us) => us.toLowerCase() === skill.toLowerCase()) ? 'skill-match' : ''}`}
            >
              {skill}
            </span>
          ))}
        </div>

        {error && <p className="application-form-error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="app-statement">Personal Statement *</label>
            <textarea
              id="app-statement"
              value={statement}
              onChange={(e) => setStatement(e.target.value)}
              placeholder="Explain why you're interested in this lab and what you can contribute..."
              rows={6}
              required
            />
            <span className="application-form-hint">
              {statement.trim().length} / 50 minimum characters
            </span>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate(`/labs/${id}`)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

ApplicationForm.propTypes = {};

export default ApplicationForm;