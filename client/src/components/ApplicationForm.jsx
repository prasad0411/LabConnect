import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './ApplicationForm.css';

function ApplicationForm({
  profileId,
  studentName,
  labId,
  labName,
  matchScore,
  onSubmit,
  onCancel,
}) {
  const [statement, setStatement] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError('');

      if (!statement.trim()) {
        setError('Please write a personal statement.');
        return;
      }

      if (statement.trim().length < 50) {
        setError('Your personal statement should be at least 50 characters.');
        return;
      }

      setLoading(true);

      const applicationData = {
        profileId,
        labId,
        studentName,
        labName,
        statement: statement.trim(),
        matchScore: matchScore || 0,
      };

      try {
        const response = await fetch('/api/applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(applicationData),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to submit application');
        }

        const saved = await response.json();
        onSubmit(saved);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [statement, profileId, labId, studentName, labName, matchScore, onSubmit],
  );

  return (
    <section className="application-form-container">
      <h2 className="application-form-title">Apply to {labName}</h2>

      {matchScore > 0 && (
        <p className="application-form-match">
          Your skill match: <strong>{matchScore}%</strong>
        </p>
      )}

      {error && <p className="application-form-error">{error}</p>}

      <form className="application-form" onSubmit={handleSubmit}>
        <label className="application-form-label" htmlFor="app-statement">
          Personal Statement *
        </label>
        <textarea
          id="app-statement"
          className="application-form-textarea"
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
          placeholder="Explain why you're interested in this lab and what you can contribute..."
          rows={6}
          required
        />
        <p className="application-form-hint">
          {statement.trim().length} / 50 minimum characters
        </p>

        <div className="application-form-actions">
          <button
            className="application-form-btn application-form-btn-primary"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
          {onCancel && (
            <button
              className="application-form-btn application-form-btn-secondary"
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

ApplicationForm.propTypes = {
  profileId: PropTypes.string.isRequired,
  studentName: PropTypes.string.isRequired,
  labId: PropTypes.string.isRequired,
  labName: PropTypes.string.isRequired,
  matchScore: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
};

ApplicationForm.defaultProps = {
  matchScore: 0,
  onCancel: null,
};

export default ApplicationForm;
