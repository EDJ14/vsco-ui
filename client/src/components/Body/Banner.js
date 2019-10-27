import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  grid-row: 3 / 4;

  height: 100%;
  background-color: black;
`;

export default () => {
  return <BannerContainer />;
};
