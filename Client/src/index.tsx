import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { ProSidebarProvider } from 'react-pro-sidebar';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProSidebarProvider>
        <App />
      <Toaster />
      </ProSidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
