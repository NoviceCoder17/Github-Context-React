import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom"

import GitHubState from './context/Github/GitHubState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GitHubState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GitHubState>
  </React.StrictMode>
);