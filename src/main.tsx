import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
// import { CurrentUserProvider } from './context/CurrentUserContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      {/* <CurrentUserProvider> */}
      <App />
      {/* </CurrentUserProvider> */}
    </Router>
  </React.StrictMode>,
);
