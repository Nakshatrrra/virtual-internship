// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';

// Create a root using createRoot instead of using render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // Render the App component
