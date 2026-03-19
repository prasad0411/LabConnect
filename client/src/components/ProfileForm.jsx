import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';
import './ProfileForm.css';

function ProfileForm({ existingProfile: propProfile, onSaved }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const existingProfile = propProfile || location.state?.profile || null;
  const isEditing = Boolean(existingProfile);
  const isInline = Boolean(onSaved);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [researchInterests, setResearchInterests] = useState('');
  const [gpaRange, setGpaRange] = useState('');
  const [availability, setAvailability] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (existingProfile) {
      setName(existingProfile.name || '');
      setEmail(existingProfile.email || '');
      setSkills(existingProfile.skills || []);
      setResearchInterests(
        Array.isArray(existingProfile.researchInterests)
          ? existingProfile.researchInterests.join(', ')
          : existingProfile.researchInterests || '',
      );
      setGpaRange(existingProfile.gpaRange || '');
      setAvailability(existingProfile.availability || '');
      setResumeUrl(existingProfile.resume_url || '');
    }
  }, [existingProfile]);

  useEffect(() => {
    if (!isEditing && user) {
      if (!name) {
        setName(user.name || '');
      }
      if (!email) {
        setEmail(user.email || '');
      }
    }
  }, [user, isEditing, name, email]);

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills((prev) => [...prev, trimmed]);
      setSkillInput('');
    }
  };

  const removeSkill = (skill) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError('');

      if (!name.trim() || !email.trim() || skills.length === 0) {
        setError('Name, email, and at least one skill are required.');
        return;
      }

      setLoading(true);

      const profileData = {
        name: name.trim(),
        email: email.trim(),
        skills,
        researchInterests: researchInterests
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
        gpaRange,
        availability,
        resume_url: resumeUrl.trim(),
      };

      try {
        const url = isEditing
          ? `/api/profiles/${existingProfile._id}`
          : '/api/profiles';
        const method = isEditing ? 'PUT' : 'POST';

        const response = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(profileData),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to save profile');
        }

        if (isInline && onSaved) {
          onSaved();
        } else {
          navigate('/profile');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [
      name,
      email,
      skills,
      researchInterests,
      gpaRange,
      availability,
      resumeUrl,
      existingProfile,
      isEditing,
      isInline,
      onSaved,
      navigate,
    ],
  );

  const handleCancel = () => {
    if (isInline && onSaved) {
      onSaved();
    } else {
      navigate('/profile');
    }
  };

  return (
    <div className="profile-form-page">
      <h1>
        {isEditing
          ? 'Edit Profile'
          : 'Complete Your Profile'}
      </h1>
      {!isEditing && (
        <p className="profile-form-subtitle">
          Fill in your details so labs can find you and match your skills.
        </p>
      )}
      {error && <p className="profile-form-error">{error}</p>}
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="profile-name">Name *</label>
          <input
            id="profile-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="profile-email">Email *</label>
          <input
            id="profile-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@university.edu"
            required
          />
        </div>

        <div className="form-group">
          <label>Skills * (press Enter to add)</label>
          <div className="skill-input-row">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a skill and press Enter"
            />
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={addSkill}
            >
              Add
            </button>
          </div>
          <div className="skill-tags">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag-removable">
                {skill}
                <button type="button" onClick={() => removeSkill(skill)}>
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="profile-interests">
            Research Interests (comma-separated)
          </label>
          <input
            id="profile-interests"
            type="text"
            value={researchInterests}
            onChange={(e) => setResearchInterests(e.target.value)}
            placeholder="Computer Vision, Robotics, NLP"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="profile-gpa">GPA Range</label>
            <select
              id="profile-gpa"
              value={gpaRange}
              onChange={(e) => setGpaRange(e.target.value)}
            >
              <option value="">Select GPA range</option>
              <option value="3.5-4.0">3.5 – 4.0</option>
              <option value="3.0-3.5">3.0 – 3.5</option>
              <option value="2.5-3.0">2.5 – 3.0</option>
              <option value="below-2.5">Below 2.5</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="profile-availability">Availability</label>
            <select
              id="profile-availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="">Select availability</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Summer only">Summer only</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="profile-resume">Resume Link (optional)</label>
          <input
            id="profile-resume"
            type="url"
            value={resumeUrl}
            onChange={(e) => setResumeUrl(e.target.value)}
            placeholder="https://drive.google.com/your-resume"
          />
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={loading}
          >
            {loading
              ? 'Saving...'
              : isEditing
                ? 'Update Profile'
                : 'Save Profile'}
          </button>
          {isEditing && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

ProfileForm.propTypes = {
  existingProfile: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    researchInterests: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
    gpaRange: PropTypes.string,
    availability: PropTypes.string,
    resume_url: PropTypes.string,
  }),
  onSaved: PropTypes.func,
};

ProfileForm.defaultProps = {
  existingProfile: null,
  onSaved: null,
};

export default ProfileForm;