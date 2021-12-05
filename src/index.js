import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/Global.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ClaimButtons from './components/ClaimButtons';
import DystoTable from './components/DystoTable'
import DystoTraits from './components/DystoTraits'
import Text from './components/Text';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ClaimButtons />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
