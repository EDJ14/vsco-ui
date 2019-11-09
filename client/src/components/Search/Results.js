import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import keys from '../../config/keys';

const ResultsContainer = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / -1;
  height: 70vh;
  background-color: red;
`;

class Results extends Component {
  state = { searhTerm: '' };

  listArticles = async term => {
    const query = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${keys.NYTkey}`;

    const res = await axios.get(query);

    console.log(res.data.response.docs);
  };

  render() {
    this.listArticles();
    return <ResultsContainer />;
  }
}

export default Results;
