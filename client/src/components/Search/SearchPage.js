import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../Footer/Footer';
import SearchInput from './SearchInput';

const SearchSection = styled.div`
  width: 100%;
  background-color: white;
  grid-row: 2 / 3;

  display: grid;
  grid-template-rows: 7vh min-content;
  grid-template-columns: 27vw 45vw 28vw;
`;

const FootSection = styled.div`
  width: 100%;
  grid-row: 3 / 4;
`;

class SearchPage extends Component {
  render() {
    return (
      <div className="search_container">
        <SearchSection>
          <SearchInput />
        </SearchSection>
        <FootSection>
          <Footer />
        </FootSection>
      </div>
    );
  }
}

export default SearchPage;
