import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


  // Add this import:
import { AppContainer } from 'react-hot-loader';

// Wrap the rendering in a function:
const render = () => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

// Do this once
serviceWorker.register();

// Render once
render();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}