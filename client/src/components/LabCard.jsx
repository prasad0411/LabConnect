import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MatchBadge from './MatchBadge';
import './LabCard.css';

function LabCard({ lab, userSkills }) {
  const fundingLabel = { funded: 'Funded', unfunded: 'Unfunded', partially_funded: 'Partial' };
  return (
    <div className="lab-card">
      <div className="lab-card-header">
        <div>
          <h3 className="lab-card-title">{lab.name}</h3>
          <p className="lab-card-professor">{lab.professor}</p>
          <span className="lab-card-department">{lab.department}</span>
        </div>
        <MatchBadge userSkills={userSkills} labSkills={lab.skills_needed} />
      </div>
      <p className="lab-card-description">
        {lab.description.length > 150 ? lab.description.substring(0, 150) + '...' : lab.description}
      </p>
      <div className="lab-card-skills">
        {lab.skills_needed.map((skill) => (
          <span key={skill} className={`skill-tag ${userSkills.some((us) => us.toLowerCase() === skill.toLowerCase()) ? 'skill-match' : ''}`}>{skill}</span>
        ))}
      </div>
      <div className="lab-card-footer">
        <div className="lab-card-meta">
          <span className={`funding-badge funding-${lab.funding_status}`}>{fundingLabel[lab.funding_status] || lab.funding_status}</span>
          <span className="openings-badge">{lab.openings} {lab.openings === 1 ? 'opening' : 'openings'}</span>
        </div>
        <Link to={`/labs/${lab._id}`} className="btn btn-primary btn-sm">View Details</Link>
      </div>
    </div>
  );
}

LabCard.propTypes = {
  lab: PropTypes.shape({
    _id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, professor: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired, description: PropTypes.string.isRequired,
    skills_needed: PropTypes.arrayOf(PropTypes.string).isRequired, openings: PropTypes.number.isRequired,
    funding_status: PropTypes.string.isRequired,
  }).isRequired,
  userSkills: PropTypes.arrayOf(PropTypes.string),
};
LabCard.defaultProps = { userSkills: [] };
export default LabCard;
