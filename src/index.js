import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoContextProvider } from './Context'


ReactDOM.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
  ,  document.getElementById('root')
);
