import React from 'react';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / -1;
  height: 70vh;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
`;

const HeadlineButtons = styled.div`
  width: 100%;
  height: 100%;
`;

const Results = props => {
  console.log(props);
  return (
    <ResultsContainer>
      {props.articles.slice(0, 9).map(article => (
        <HeadlineButtons>{article.headline.main}</HeadlineButtons>
      ))}
    </ResultsContainer>
  );
};

export default Results;
