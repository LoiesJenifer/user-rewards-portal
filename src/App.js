
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RewardDetail from './components/RewardDetail';
import { RewardProvider } from './contexts/RewardContext';  // Importing RewardProvider

function App() {
  return (
    <RewardProvider>
    <Router>
        
        <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reward/:id" element={<RewardDetail />} />
      </Routes>
        </div>
    </Router>
    </RewardProvider>
    
  );
}

export default App;
