import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./ProfileForm.css";

function ProfileForm({ existingProfile, onSave, onCancel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [researchInterests, setResearchInterests] = useState("");
  const [gpaRange, setGpaRange] = useState("");
  const [availability, setAvailability] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (existingProfile) {
      setName(existingProfile.name || "");
      setEmail(existingProfile.email || "");
      setSkills(
        Array.isArray(existingProfile.skills)
          ? existingProfile.skills.join(", ")
          : existingProfile.skills || "",
      );
      setResearchInterests(
        Array.isArray(existingProfile.researchInterests)
          ? existingProfile.researchInterests.join(", ")
          : existingProfile.researchInterests || "",
      );
      setGpaRange(existingProfile.gpaRange || "");
      setAvailability(existingProfile.availability || "");
      setResumeUrl(existingProfile.resume_url || "");
    }
  }, [existingProfile]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");

      if (!name.trim() || !email.trim() || !skills.trim()) {
        setError("Name, email, and skills are required.");
        return;
      }

      setLoading(true);

      const profileData = {
        name: name.trim(),
        email: email.trim(),
        skills: skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        researchInterests: researchInterests
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        gpaRange,
        availability,
        resume_url: resumeUrl.trim(),
      };

      try {
        const url = existingProfile
          ? `/api/profiles/${existingProfile._id}`
          : "/api/profiles";
        const method = existingProfile ? "PUT" : "POST";

        const response = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(profileData),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Failed to save profile");
        }

        const saved = await response.json();
        onSave(saved);
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
      onSave,
    ],
  );

  return (
    <section className="profile-form-container">
      <h2 className="profile-form-title">
        {existingProfile ? "Edit Profile" : "Create Profile"}
      </h2>

      {error && <p className="profile-form-error">{error}</p>}

      <form className="profile-form" onSubmit={handleSubmit}>
        <label className="profile-form-label" htmlFor="profile-name">
          Name *
        </label>
        <input
          id="profile-name"
          className="profile-form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          required
        />

        <label className="profile-form-label" htmlFor="profile-email">
          Email *
        </label>
        <input
          id="profile-email"
          className="profile-form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@university.edu"
          required
        />

        <label className="profile-form-label" htmlFor="profile-skills">
          Skills * (comma-separated)
        </label>
        <input
          id="profile-skills"
          className="profile-form-input"
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Python, Machine Learning, NLP"
          required
        />

        <label className="profile-form-label" htmlFor="profile-interests">
          Research Interests (comma-separated)
        </label>
        <input
          id="profile-interests"
          className="profile-form-input"
          type="text"
          value={researchInterests}
          onChange={(e) => setResearchInterests(e.target.value)}
          placeholder="Computer Vision, Robotics"
        />

        <label className="profile-form-label" htmlFor="profile-gpa">
          GPA Range
        </label>
        <select
          id="profile-gpa"
          className="profile-form-select"
          value={gpaRange}
          onChange={(e) => setGpaRange(e.target.value)}
        >
          <option value="">Select GPA range</option>
          <option value="3.5-4.0">3.5 – 4.0</option>
          <option value="3.0-3.5">3.0 – 3.5</option>
          <option value="2.5-3.0">2.5 – 3.0</option>
          <option value="below-2.5">Below 2.5</option>
        </select>

        <label className="profile-form-label" htmlFor="profile-availability">
          Availability
        </label>
        <select
          id="profile-availability"
          className="profile-form-select"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="">Select availability</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Summer only">Summer only</option>
        </select>

        <label className="profile-form-label" htmlFor="profile-resume">
          Resume Link
        </label>
        <input
          id="profile-resume"
          className="profile-form-input"
          type="url"
          value={resumeUrl}
          onChange={(e) => setResumeUrl(e.target.value)}
          placeholder="https://drive.google.com/your-resume"
        />

        <div className="profile-form-actions">
          <button
            className="profile-form-btn profile-form-btn-primary"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Saving..."
              : existingProfile
                ? "Update Profile"
                : "Create Profile"}
          </button>
          {onCancel && (
            <button
              className="profile-form-btn profile-form-btn-secondary"
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

ProfileForm.propTypes = {
  existingProfile: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    skills: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
    researchInterests: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
    gpaRange: PropTypes.string,
    availability: PropTypes.string,
    resume_url: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
};

ProfileForm.defaultProps = {
  existingProfile: null,
  onCancel: null,
};

export default ProfileForm;