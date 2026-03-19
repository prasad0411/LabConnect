import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';
import ProfileForm from './ProfileForm';
import './ProfileView.css';

function ProfileView() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false);

  const fetchProfile = useCallback(async () => {
    try {
      const response = await fetch('/api/profiles/me');
      if (response.status === 404) {
        setProfile(null);
        return;
      }
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
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleDeleteAccount = useCallback(async () => {
    if (
      !window.confirm(
        'This will permanently delete your account, profile, and all applications. Are you sure?',
      )
    ) {
      return;
    }

    try {
      const response = await fetch('/api/auth/account', {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete account');
      }

      await logout();
      navigate('/register');
    } catch (err) {
      setError(err.message);
    }
  }, [logout, navigate]);

  const handleSaved = useCallback(() => {
    setEditing(false);
    setLoading(true);
    fetchProfile();
  }, [fetchProfile]);

  if (loading) {
    return <p className="loading-text">Loading profile...</p>;
  }

  if (error) {
    return <p className="empty-text">{error}</p>;
  }

  if (!profile || editing) {
    return (
      <ProfileForm
        existingProfile={editing ? profile : null}
        onSaved={handleSaved}
      />
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

        {profile.skills && profile.skills.length > 0 && (
          <div className="profile-view-section">
            <h3>Skills</h3>
            <div className="profile-view-tags">
              {profile.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

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

        {(profile.gpaRange || profile.availability || profile.resume_url) && (
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
        )}

        <div className="profile-view-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setEditing(true)}
          >
            Edit Profile
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

ProfileView.propTypes = {};

export default ProfileView;
