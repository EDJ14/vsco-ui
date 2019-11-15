import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import keys from '../../config/keys';

const ResultsContainer = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / -1;
  height: 70vh;
  background-color: red;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;

const HeadlineButtons = styled.div`
  width: 3rem;
  background-color: black;
  color: white;
`;

class Results extends Component {
  state = { results: '' };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.input == nextProps.input) {
      console.log('didnt update');
      return false;
    }
    return true;
  }

  listArticles = async term => {
    console.log(this.props);
    if (term.length == 0) {
      console.log('returned');
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
    return <ResultsContainer>{this.state.results}</ResultsContainer>;
  }
}

export default Results;
