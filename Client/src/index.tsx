import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store, { persistor } from './store/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { PersistGate } from "redux-persist/integration/react";
import { GoogleOAuthProvider } from '@react-oauth/google';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 350,
      md: 650,
      lg: 900,
      xl: 1200,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ProSidebarProvider> */}
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_KEY || ""}>
              <App />
            </GoogleOAuthProvider>
          </PersistGate>
        </ThemeProvider>
      </Provider>
      {/* <Toaster /> */}
      {/* </ProSidebarProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
