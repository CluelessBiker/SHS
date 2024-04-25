import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import LocationsPage from './pages/LocationsPage';
import LoginPage from './pages/LoginPage';
import './api/axiosDefaults';
import ServicesPage from './pages/ServicesPage';
import PractitionersPage from './pages/PractitionersPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className={'bodyContainer'}>
      <Navbar />
      <div className={'bodyInner'}>
        <Routes>
          <Route path={'/'} element={<AboutPage />} />
          <Route path={'/locations'} element={<LocationsPage />} />
          <Route path={'/services'} element={<ServicesPage />} />
          <Route path={'/practitioners'} element={<PractitionersPage />} />
          <Route path={'/contact'} element={<ContactPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          {/* FIXME: replace with 404 page later */}
          <Route element={<h1>Page not found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
