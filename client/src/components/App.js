import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import SearchPage from './Search/SearchPage';
import Header from './Header/Header';
import CitySearch from './Search/CitySearch';
import Charts from './Charts';
import Thousand from './Thousand';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/city" component={CitySearch} />
          <Route exact path="/chart" component={Charts} />
          <Route exact path="/tiles" component={Thousand} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
