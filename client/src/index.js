import './scss/_main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios'
import App from './components/App';

window.axios = axios
//const store = createStore({}, {});

ReactDOM.render(<App />, document.getElementById('root'));

export default hot(module)(App);
