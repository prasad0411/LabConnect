import PropTypes from 'prop-types';
import './MatchBadge.css';

function MatchBadge({ userSkills, labSkills }) {
  if (!userSkills || !labSkills || labSkills.length === 0) return null;
  const matchingSkills = labSkills.filter((skill) =>
    userSkills.some((us) => us.toLowerCase() === skill.toLowerCase()),
  );
  const percentage = Math.round(
    (matchingSkills.length / labSkills.length) * 100,
  );
  let colorClass = 'match-low';
  if (percentage >= 70) colorClass = 'match-high';
  else if (percentage >= 40) colorClass = 'match-medium';
  return (
    <div className={`match-badge ${colorClass}`}>
      <span className="match-percentage">{percentage}%</span>
      <span className="match-label">match</span>
    </div>
  );
}

MatchBadge.propTypes = {
  userSkills: PropTypes.arrayOf(PropTypes.string),
  labSkills: PropTypes.arrayOf(PropTypes.string),
};
MatchBadge.defaultProps = { userSkills: [], labSkills: [] };
export default MatchBadge;
