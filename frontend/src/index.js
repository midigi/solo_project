import React from 'react';
import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreCSRF, fetch } from './store/csrf';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = fetch;
  window.store = store;
}

function Root() {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
      document.addEventListener('toggleDarkMode', (e) => {
          setDarkMode(e.detail)
      })
  }, [])

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <div className={darkMode ? 'darkMode' : ''}>
          <App />
        </div>
      </BrowserRouter>
    </ReduxProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
