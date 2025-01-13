import React from 'react';
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard';
import FirstGuru from './pages/FirstGuru';
import TownHall from './pages/TownHall';
import AiEvolution from './pages/AiEvolution';
import Performance from './pages/Performance';
import MockTest from './pages/MockTest';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/firstguru" element={<FirstGuru />} />
          <Route path="/townhall" element={<TownHall />} />
          <Route path="/aievolution" element={<AiEvolution />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/mocktest" element={<MockTest />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
