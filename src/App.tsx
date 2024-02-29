import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LocationsPage from './pages/LocationsPage';
import LoginPage from './pages/LoginPage';
import './api/axiosDefaults';

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
          <Route path={'/login'} element={<LoginPage />} />
          {/* FIXME: replace with 404 page later */}
          <Route element={<h1>Page not found</h1>} />
        </Routes>
        <p>eventual footer</p>
      </Router>
    </div>
  );
}

export default App;
