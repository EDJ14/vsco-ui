import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  grid-row: 3 / 4;

  height: 100%;
  background-color: yellow;
`;

export default () => {
  return <FooterContainer />;
};
