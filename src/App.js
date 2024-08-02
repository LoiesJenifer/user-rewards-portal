// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RewardDetail from './components/RewardDetail';


function App() {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('background.jpg')" }}>
    <Router>
        
        <div className="container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reward/:id" element={<RewardDetail />} />
      </Routes>
        </div>
    </Router>
    </div>
  );
}

export default App;
