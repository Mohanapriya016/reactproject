import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'; // Import the Layout component
import Home from './pages/home';    // Import the Home component

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Render the App component into the root element in index.html
const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App />);
