import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import LabList from './components/LabList';
import LabDetail from './components/LabDetail';
import LabForm from './components/LabForm';
import ProfileForm from './components/ProfileForm';
import ProfileView from './components/ProfileView';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import ApplicationReview from './components/ApplicationReview';
import PropTypes from 'prop-types';
import './App.css';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

function PublicRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }

  if (user) {
    return <Navigate to="/labs" replace />;
  }

  return children;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

function AppRoutes() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/labs"
            element={
              <ProtectedRoute>
                <LabList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/labs/new"
            element={
              <ProtectedRoute>
                <LabForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/labs/:id"
            element={
              <ProtectedRoute>
                <LabDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/labs/:id/edit"
            element={
              <ProtectedRoute>
                <LabForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/create"
            element={
              <ProtectedRoute>
                <ProfileForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <ProtectedRoute>
                <ProfileForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/applications"
            element={
              <ProtectedRoute>
                <ApplicationList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/labs/:id/apply"
            element={
              <ProtectedRoute>
                <ApplicationForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/labs/:id/applications"
            element={
              <ProtectedRoute>
                <ApplicationReview />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
