import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import Video1 from './Body/Video1';
import Picture1 from './Body/Picture1';
import Banner from './Body/Banner';
import Picture2 from './Body/Picture2';
import Trial from './Body/Trial';
import Footer from './Footer/Footer';

const HeaderContainer = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / -1;

  background-color: red;
`;

const BodyContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / -1;

  display: grid;
  grid-template-rows: 85.5vh 100vh 50vh 100vh 100vh;
`;

const FooterContainer = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / -1;
`;

export default () => {
  return [
    <HeaderContainer>
      <Header></Header>
    </HeaderContainer>,
    <BodyContainer>
      <Video1></Video1>
      <Picture1></Picture1>
      <Banner></Banner>
      <Picture2></Picture2>
      <Trial></Trial>
    </BodyContainer>,
    <FooterContainer>
      <Footer></Footer>
    </FooterContainer>
  ];
};
