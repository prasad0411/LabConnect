export function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'You must be logged in' });
}

export function isProfessor(req, res, next) {
  if (req.isAuthenticated() && req.user.role === 'professor') {
    return next();
  }
  res.status(403).json({ error: 'Professor access required' });
}

export function isStudent(req, res, next) {
  if (req.isAuthenticated() && req.user.role === 'student') {
    return next();
  }
  res.status(403).json({ error: 'Student access required' });
}
