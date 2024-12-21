import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SecondPage from './SecondPage'; // Import the second page
import { StaticDelivr } from 'staticdelivr';

// The base url of your website
StaticDelivr.set({ baseURL: 'https://placehold.co' });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} /> {/* The first page */}
      <Route path="/second" element={<SecondPage />} /> {/* The second page */}
    </Routes>
  </Router>
);
