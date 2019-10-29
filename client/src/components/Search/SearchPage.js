import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../Footer/Footer';

const SearchSection = styled.div`
  width: 100%;
  background-color: white;

  grid-row: 1 / 2;
`;

const FootSection = styled.div`
  width: 100%;
  grid-row: 2 / 3;
`;

class SearchPage extends Component {
  render() {
    return (
      <div className="search_container">
        <SearchSection />
        <FootSection>
          <Footer />
        </FootSection>
      </div>
    );
  }
}

export default SearchPage;
