import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import DetectionPage from './pages/DetectionPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/detect" element={<DetectionPage/>} />
      </Routes>
    </Router>
  )
}

export default App;