import React from 'react';
import styled from 'styled-components';

import pic_1 from '../../scss/img/nat-8.jpg';

const Pic1Container = styled.div`
  grid-row: 2 / 3;
  position: sticky;
  top: 0;
  z-index: -1;

  height: 100%;
  background-color: black;
`;

export default () => {
  return (
    <Pic1Container>
      <img src={pic_1} style={{ width: '100%' }} />
    </Pic1Container>
  );
};
