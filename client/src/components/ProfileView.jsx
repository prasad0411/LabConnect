import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProfileView.css';

function ProfileView() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const profileId = localStorage.getItem('labconnect_profile_id');

  const fetchProfile = useCallback(async () => {
    if (!profileId) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/profiles/${profileId}`);
      if (!response.ok) {
        throw new Error('Failed to load profile');
      }
      const data = await response.json();
      setProfile(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [profileId]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleDelete = useCallback(async () => {
    if (!window.confirm('Are you sure you want to delete your profile?')) {
      return;
    }

    try {
      const response = await fetch(`/api/profiles/${profileId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete profile');
      }

      localStorage.removeItem('labconnect_profile_id');
      localStorage.removeItem('labconnect_skills');
      setProfile(null);
    } catch (err) {
      setError(err.message);
    }
  }, [profileId]);

  if (loading) {
    return <p className="loading-text">Loading profile...</p>;
  }

  if (error) {
    return <p className="empty-text">{error}</p>;
  }

  if (!profile) {
    return (
      <div className="profile-view-empty">
        <h1>My Profile</h1>
        <p>You haven&apos;t created a profile yet.</p>
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
    <div className="profile-view">
      <h1>My Profile</h1>
      <div className="profile-view-card">
        <div className="profile-view-header">
          <div>
            <h2 className="profile-view-name">{profile.name}</h2>
            <p className="profile-view-email">{profile.email}</p>
          </div>
          {profile.availability && (
            <span className="availability-badge">{profile.availability}</span>
          )}
        </div>

        <div className="profile-view-section">
          <h3>Skills</h3>
          <div className="profile-view-tags">
            {profile.skills &&
              profile.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
          </div>
        </div>

        {profile.researchInterests && profile.researchInterests.length > 0 && (
          <div className="profile-view-section">
            <h3>Research Interests</h3>
            <div className="profile-view-tags">
              {profile.researchInterests.map((interest) => (
                <span key={interest} className="interest-tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="profile-view-meta">
          {profile.gpaRange && (
            <div className="meta-item">
              <strong>GPA Range:</strong> {profile.gpaRange}
            </div>
          )}
          {profile.availability && (
            <div className="meta-item">
              <strong>Availability:</strong> {profile.availability}
            </div>
          )}
          {profile.resume_url && (
            <div className="meta-item">
              <strong>Resume:</strong>{' '}
              <a
                href={profile.resume_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          )}
        </div>

        <div className="profile-view-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/profile/edit', { state: { profile } })}
          >
            Edit Profile
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
}

ProfileView.propTypes = {};

export default ProfileView;
