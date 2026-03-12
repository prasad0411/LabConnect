import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LabForm.css';

function LabForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  const [formData, setFormData] = useState({ name: '', professor: '', department: '', description: '', openings: 1, funding_status: 'unfunded', website: '' });
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');

  useEffect(() => {
    if (isEditing) {
      (async () => {
        try {
          const res = await fetch(`/api/labs/${id}`);
          const data = await res.json();
          setFormData({ name: data.name || '', professor: data.professor || '', department: data.department || '', description: data.description || '', openings: data.openings || 1, funding_status: data.funding_status || 'unfunded', website: data.website || '' });
          setSkills(data.skills_needed || []);
        } catch (error) { console.error('Failed to load lab:', error); }
      })();
    }
  }, [id, isEditing]);

  const handleChange = (e) => { const { name, value } = e.target; setFormData((prev) => ({ ...prev, [name]: value })); };
  const addSkill = () => { const t = skillInput.trim(); if (t && !skills.includes(t)) { setSkills((p) => [...p, t]); setSkillInput(''); } };
  const removeSkill = (s) => setSkills((p) => p.filter((x) => x !== s));
  const handleKeyDown = (e) => { if (e.key === 'Enter') { e.preventDefault(); addSkill(); } };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData, openings: Number(formData.openings), skills_needed: skills };
    try {
      const url = isEditing ? `/api/labs/${id}` : '/api/labs';
      const method = isEditing ? 'PUT' : 'POST';
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (res.ok) { const data = await res.json(); navigate(isEditing ? `/labs/${id}` : `/labs/${data._id}`); }
      else { alert('Failed to save lab listing'); }
    } catch (error) { console.error('Submit error:', error); }
  };

  const departments = ['Computer Science','Electrical Engineering','Data Science','Information Systems','Biomedical Engineering','Mechanical Engineering','Computer Engineering','Artificial Intelligence','Cybersecurity','Robotics','Physics','Mathematics'];

  return (
    <div className="lab-form-page">
      <h1>{isEditing ? 'Edit Lab Listing' : 'Post a New Lab'}</h1>
      <form className="lab-form" onSubmit={handleSubmit}>
        <div className="form-group"><label htmlFor="name">Lab Name</label><input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="e.g., Machine Learning Research Lab" required /></div>
        <div className="form-group"><label htmlFor="professor">Professor / PI</label><input id="professor" name="professor" type="text" value={formData.professor} onChange={handleChange} placeholder="e.g., Dr. Sarah Chen" required /></div>
        <div className="form-row">
          <div className="form-group"><label htmlFor="department">Department</label><select id="department" name="department" value={formData.department} onChange={handleChange} required><option value="">Select department</option>{departments.map((d) => (<option key={d} value={d}>{d}</option>))}</select></div>
          <div className="form-group"><label htmlFor="openings">Openings</label><input id="openings" name="openings" type="number" min="0" max="20" value={formData.openings} onChange={handleChange} /></div>
          <div className="form-group"><label htmlFor="funding_status">Funding</label><select id="funding_status" name="funding_status" value={formData.funding_status} onChange={handleChange}><option value="funded">Funded</option><option value="partially_funded">Partially Funded</option><option value="unfunded">Unfunded</option></select></div>
        </div>
        <div className="form-group"><label htmlFor="description">Research Description</label><textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Describe your lab's research focus..." rows="5" required /></div>
        <div className="form-group">
          <label>Skills Needed</label>
          <div className="skill-input-row"><input type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type a skill and press Enter" /><button type="button" className="btn btn-primary btn-sm" onClick={addSkill}>Add</button></div>
          <div className="skill-tags">{skills.map((skill) => (<span key={skill} className="skill-tag-removable">{skill}<button type="button" onClick={() => removeSkill(skill)}>×</button></span>))}</div>
        </div>
        <div className="form-group"><label htmlFor="website">Lab Website (optional)</label><input id="website" name="website" type="url" value={formData.website} onChange={handleChange} placeholder="https://..." /></div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary btn-lg">{isEditing ? 'Update Listing' : 'Create Listing'}</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/labs')}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default LabForm;
