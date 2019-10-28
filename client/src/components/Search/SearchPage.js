import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 100%;
  background-color: red;
`;

class SearchPage extends Component {
  render() {
    return <SearchContainer />;
  }
}

export default SearchPage;
