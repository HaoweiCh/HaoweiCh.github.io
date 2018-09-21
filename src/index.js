import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from '@/registerServiceWorker';

window.localStorage.setItem('urlPrefix', 'https://gist.githubusercontent.com/Chaaang/353a98aaa316fdec6785c38feb256b53/raw/8a047eee365b6e53041dab28d39549c447b1c8fb/')

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();