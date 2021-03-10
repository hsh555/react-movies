import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import RouteHandler from './router';
import "./assets/styles/reset.css";
import "./assets/styles/general.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteHandler />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
