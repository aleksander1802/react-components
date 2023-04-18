import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
