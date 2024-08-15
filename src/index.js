// COMPONENTS
import App from './App';

// STYLES
import './index.css';

// REACT
import React from 'react';
import ReactDOM from 'react-dom/client';

// REDUX
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers/index.js';

// On crée le store Redux
const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


