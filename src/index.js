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
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import Team from './components/Team';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ClaimButtons />
    <Home />
    <Roadmap />
    <Team />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
