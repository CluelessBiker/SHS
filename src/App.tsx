import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LocationsPage from './pages/LocationsPage';

function App() {
  return (
    <div className={'bodyContainer'}>
      <Router>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/locations'} element={<LocationsPage />} />
          <Route path={'/services'} element={<></>} />
          <Route path={'/practitioners'} element={<></>} />
          <Route path={'/contact'} element={<></>} />
          {/* FIXME: replace with 404 page later */}
          <Route element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
