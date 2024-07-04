import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Router from './Router.jsx';
import Layout from './components/Layout.jsx';
import Navbar from './components/Navbar.jsx';

import { StateContext } from '../context/StateContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContext>
      <Router>
      
        <Layout>
        
          <App />
        </Layout>
      </Router>
    </StateContext>
  </React.StrictMode>,
)
