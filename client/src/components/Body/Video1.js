import React from 'react';
import styled from 'styled-components';

const VidBackground = styled.div`
  grid-row: 1 / 2;

  height: 100%;
  background-color: blue;
`;

export default () => {
  return <VidBackground />;
};
