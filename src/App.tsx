import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LocationsPage from './pages/LocationsPage';
import LoginPage from './pages/LoginPage';
import './api/axiosDefaults';
import axios from 'axios';

export const CurrentUserContext = createContext<null | any>(null);
export const SetCurrentUserContext = createContext<React.Dispatch<
  React.SetStateAction<any>
> | null>(null);

function App() {
  const [currentUser, setCurrentUser] = useState<null>(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get('dj-rest-auth/user/');
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
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
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
