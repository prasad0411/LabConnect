import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import MatchBadge from './MatchBadge';
import './LabDetail.css';

function LabDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lab, setLab] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('labconnect_skills');
    if (stored) setUserSkills(JSON.parse(stored));
  }, []);

  useEffect(() => {
    async function fetchLab() {
      try {
        const res = await fetch(`/api/labs/${id}`);
        if (!res.ok) throw new Error('Lab not found');
        setLab(await res.json());
      } catch (error) { console.error(error); }
      finally { setLoading(false); }
    }
    fetchLab();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this lab listing?')) return;
    try { await fetch(`/api/labs/${id}`, { method: 'DELETE' }); navigate('/labs'); }
    catch (error) { console.error('Delete failed:', error); }
  };

  if (loading) return <p className="loading-text">Loading...</p>;
  if (!lab) return <p className="empty-text">Lab not found.</p>;
  const fundingLabel = { funded: 'Funded', unfunded: 'Unfunded', partially_funded: 'Partially Funded' };

  return (
    <div className="lab-detail">
      <button type="button" className="btn btn-back" onClick={() => navigate('/labs')}>← Back to Labs</button>
      <div className="lab-detail-card">
        <div className="lab-detail-header">
          <div>
            <h1>{lab.name}</h1>
            <p className="lab-detail-professor">{lab.professor}</p>
            <span className="lab-detail-department">{lab.department}</span>
          </div>
          <MatchBadge userSkills={userSkills} labSkills={lab.skills_needed} />
        </div>
        <div className="lab-detail-section"><h2>About This Lab</h2><p>{lab.description}</p></div>
        <div className="lab-detail-section">
          <h2>Skills Needed</h2>
          <div className="lab-detail-skills">
            {lab.skills_needed.map((skill) => (
              <span key={skill} className={`skill-tag ${userSkills.some((us) => us.toLowerCase() === skill.toLowerCase()) ? 'skill-match' : ''}`}>
                {skill}{userSkills.some((us) => us.toLowerCase() === skill.toLowerCase()) && ' ✓'}
              </span>
            ))}
          </div>
        </div>
        <div className="lab-detail-meta">
          <div className="meta-item"><strong>Openings:</strong> {lab.openings}</div>
          <div className="meta-item"><strong>Funding:</strong> {fundingLabel[lab.funding_status] || lab.funding_status}</div>
          {lab.website && <div className="meta-item"><strong>Website:</strong> <a href={lab.website} target="_blank" rel="noopener noreferrer">{lab.website}</a></div>}
        </div>
        <div className="lab-detail-actions">
          <button type="button" className="btn btn-primary btn-lg">Apply to This Lab</button>
          <Link to={`/labs/${lab._id}/edit`} className="btn btn-secondary">Edit Listing</Link>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default LabDetail;
