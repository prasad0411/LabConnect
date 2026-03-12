import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LabList from './components/LabList';
import LabDetail from './components/LabDetail';
import LabForm from './components/LabForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LabList />} />
          <Route path="/labs" element={<LabList />} />
          <Route path="/labs/new" element={<LabForm />} />
          <Route path="/labs/:id" element={<LabDetail />} />
          <Route path="/labs/:id/edit" element={<LabForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
