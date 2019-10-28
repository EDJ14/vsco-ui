import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import SearchPage from './Search/SearchPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
