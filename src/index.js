import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from 'context/AuthContext';
import VisualizationContextProvider from 'context/VisualizationContext';
import * as serviceWorker from 'serviceWorkerRegistration';

ReactDOM.render(
  <AuthContextProvider>
    <VisualizationContextProvider>
      <App />
    </VisualizationContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);

serviceWorker.register();
