import React, { Component } from 'react';
import styled from 'styled-components';

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
  listArticles = props => {
    console.log(props);
  };

  render() {
    this.listArticles(this.props);
    return <ResultsContainer>{'this.state.results'}</ResultsContainer>;
  }
}

export default Results;
