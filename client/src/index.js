import './scss/_main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

//const store = createStore({}, {});

ReactDOM.render(<App />, document.getElementById('root'));

export default hot(module)(App);
