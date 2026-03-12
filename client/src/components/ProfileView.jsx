import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./ProfileView.css";

function ProfileView({ profileId, onEdit, onDelete }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProfile = useCallback(async () => {
    if (!profileId) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/profiles/${profileId}`);
      if (!response.ok) {
        throw new Error("Failed to load profile");
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
    if (!window.confirm("Are you sure you want to delete your profile?")) {
      return;
    }

    try {
      const response = await fetch(`/api/profiles/${profileId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete profile");
      }

      onDelete();
    } catch (err) {
      setError(err.message);
    }
  }, [profileId, onDelete]);

  if (loading) {
    return <p className="profile-view-loading">Loading profile...</p>;
  }

  if (error) {
    return <p className="profile-view-error">{error}</p>;
  }

  if (!profile) {
    return (
      <section className="profile-view-empty">
        <p>No profile found. Create one to get started!</p>
      </section>
    );
  }

  return (
    <section className="profile-view-container">
      <header className="profile-view-header">
        <h2 className="profile-view-name">{profile.name}</h2>
        <span className="profile-view-availability">
          {profile.availability}
        </span>
      </header>

      <p className="profile-view-email">{profile.email}</p>

      <div className="profile-view-section">
        <h3 className="profile-view-section-title">Skills</h3>
        <ul className="profile-view-tags">
          {profile.skills &&
            profile.skills.map((skill) => (
              <li key={skill} className="profile-view-tag">
                {skill}
              </li>
            ))}
        </ul>
      </div>

      {profile.researchInterests && profile.researchInterests.length > 0 && (
        <div className="profile-view-section">
          <h3 className="profile-view-section-title">Research Interests</h3>
          <ul className="profile-view-tags profile-view-tags-interests">
            {profile.researchInterests.map((interest) => (
              <li
                key={interest}
                className="profile-view-tag profile-view-tag-interest"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      )}

      {profile.gpaRange && (
        <div className="profile-view-section">
          <h3 className="profile-view-section-title">GPA Range</h3>
          <p className="profile-view-text">{profile.gpaRange}</p>
        </div>
      )}

      {profile.resume_url && (
        <div className="profile-view-section">
          <h3 className="profile-view-section-title">Resume</h3>
          <a
            className="profile-view-link"
            href={profile.resume_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      )}

      <div className="profile-view-actions">
        <button
          className="profile-view-btn profile-view-btn-edit"
          type="button"
          onClick={() => onEdit(profile)}
        >
          Edit Profile
        </button>
        <button
          className="profile-view-btn profile-view-btn-delete"
          type="button"
          onClick={handleDelete}
        >
          Delete Profile
        </button>
      </div>
    </section>
  );
}

ProfileView.propTypes = {
  profileId: PropTypes.string,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

ProfileView.defaultProps = {
  profileId: null,
};

export default ProfileView;