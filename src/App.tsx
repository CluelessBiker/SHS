import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LocationsPage from './pages/LocationsPage';
import LoginPage from './pages/LoginPage';
import './api/axiosDefaults';
import ServicesPage from './pages/ServicesPage.tsx';
import PractitionersPage from './pages/PractitionersPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className={'bodyContainer'}>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/locations'} element={<LocationsPage />} />
        <Route path={'/services'} element={<ServicesPage />} />
        <Route path={'/practitioners'} element={<PractitionersPage />} />
        <Route path={'/contact'} element={<ContactPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        {/* FIXME: replace with 404 page later */}
        <Route element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
