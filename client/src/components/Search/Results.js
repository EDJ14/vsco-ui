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
  listArticles = async term => {
    const query = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${keys.NYTkey}`;

    const res = await axios.get(query);
    return res.data.response.docs.map(article => <div>{article.headline}</div>);
  };

  render() {
    return (
      <ResultsContainer>
        {this.listArticles(this.props.searchTerm)}
      </ResultsContainer>
    );
  }
}

export default Results;
