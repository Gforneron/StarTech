import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/css/app.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
=======
import ReactDOM from 'react-dom/client';
import App from './App'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
  </>
>>>>>>> 4df36db4bb8df86a502b99be23a51ed2ba3170bf
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
