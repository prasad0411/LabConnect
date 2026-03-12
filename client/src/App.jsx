import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LabList from './components/LabList';
import LabDetail from './components/LabDetail';
import LabForm from './components/LabForm';
import ProfileForm from './components/ProfileForm';
import ProfileView from './components/ProfileView';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './components/ApplicationList';
import ApplicationReview from './components/ApplicationReview';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Navigate to="/labs" replace />} />
            <Route path="/labs" element={<LabList />} />
            <Route path="/labs/new" element={<LabForm />} />
            <Route path="/labs/:id" element={<LabDetail />} />
            <Route path="/labs/:id/edit" element={<LabForm />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/profile/create" element={<ProfileForm />} />
            <Route path="/profile/edit" element={<ProfileForm />} />
            <Route path="/applications" element={<ApplicationList />} />
            <Route path="/labs/:id/apply" element={<ApplicationForm />} />
            <Route
              path="/labs/:id/applications"
              element={<ApplicationReview />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
