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

const HeadlineButtons = styled.div`
  width: 3rem;
  background-color: black;
`;

class Results extends Component {
  state = { results: '' };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.input == nextProps.input) {
      return false;
    }
    return true;
  }

  listArticles = async term => {
    if (term.length == 0) {
      return;
    }

    const query = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${keys.NYTkey}`;

    const res = await axios.get(query);

    this.setState({
      results: res.data.response.docs.map(article => {
        return <HeadlineButtons>{article.headline.main}</HeadlineButtons>;
      })
    });
  };

  render() {
    console.log('rendering');
    this.listArticles(this.props.input);
    return (
      <ResultsContainer>
        <div>{this.state.results}</div>
      </ResultsContainer>
    );
  }
}

export default Results;
