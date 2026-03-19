import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import LabCard from './LabCard';
import './LabList.css';

function LabList() {
  const { user } = useAuth();
  const [labs, setLabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [funding, setFunding] = useState('');
  const [userSkills, setUserSkills] = useState([]);

  const isStudent = user && user.role === 'student';

  useEffect(() => {
    if (!isStudent) return;
    async function fetchProfile() {
      try {
        const res = await fetch('/api/profiles/me');
        if (res.ok) {
          const profile = await res.json();
          setUserSkills(profile.skills || []);
        }
      } catch (err) {
        console.error('Could not load profile for skill matching');
      }
    }
    fetchProfile();
  }, [isStudent]);

  const fetchLabs = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (department) params.append('department', department);
      if (funding) params.append('funding', funding);
      const res = await fetch(`/api/labs?${params.toString()}`);
      const data = await res.json();
      if (isStudent && userSkills.length > 0) {
        data.sort((a, b) => {
          const aM = a.skills_needed.filter((s) =>
            userSkills.some((us) => us.toLowerCase() === s.toLowerCase()),
          ).length;
          const bM = b.skills_needed.filter((s) =>
            userSkills.some((us) => us.toLowerCase() === s.toLowerCase()),
          ).length;
          return bM - aM;
        });
      }
      setLabs(data);
    } catch (error) {
      console.error('Failed to fetch labs:', error);
    } finally {
      setLoading(false);
    }
  }, [search, department, funding, userSkills, isStudent]);

  useEffect(() => {
    fetchLabs();
  }, [fetchLabs]);

  const departments = [
    'Computer Science',
    'Electrical Engineering',
    'Data Science',
    'Information Systems',
    'Biomedical Engineering',
    'Mechanical Engineering',
    'Computer Engineering',
    'Artificial Intelligence',
    'Cybersecurity',
    'Robotics',
    'Physics',
    'Mathematics',
  ];

  return (
    <div className="lab-list-page">
      <div className="lab-list-header">
        <h1>Browse Research Labs</h1>
        <p>Find labs that match your skills and research interests</p>
      </div>
      <form
        className="lab-filters"
        onSubmit={(e) => {
          e.preventDefault();
          fetchLabs();
        }}
      >
        <input
          type="text"
          placeholder="Search labs, professors, topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="filter-search"
        />
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="filter-select"
        >
          <option value="">All Departments</option>
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <select
          value={funding}
          onChange={(e) => setFunding(e.target.value)}
          className="filter-select"
        >
          <option value="">All Funding</option>
          <option value="funded">Funded</option>
          <option value="partially_funded">Partially Funded</option>
          <option value="unfunded">Unfunded</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setSearch('');
            setDepartment('');
            setFunding('');
          }}
        >
          Clear
        </button>
      </form>
      <p className="lab-count">{labs.length} labs found</p>
      {loading ? (
        <p className="loading-text">Loading labs...</p>
      ) : labs.length === 0 ? (
        <p className="empty-text">No labs found. Try different filters.</p>
      ) : (
        <div className="lab-grid">
          {labs.map((lab) => (
            <LabCard
              key={lab._id}
              lab={lab}
              userSkills={isStudent ? userSkills : []}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default LabList;