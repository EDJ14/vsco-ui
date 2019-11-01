import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  height: 100%;
  background-color: black;
  padding: 7rem 0;

  display: flex;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1.25rem;
  margin: 0 7rem;
  justify-content: space-between;
`;

const ColumnItems = styled.div``;

export default () => {
  return (
    <FooterContainer>
      <FooterColumn>
        <div>Company</div>
        <div>About</div>
        <div>Careers</div>
      </FooterColumn>
      <FooterColumn>
        <div>Community</div>
        <div>Guidelines</div>
        <div>Support</div>
      </FooterColumn>
      <FooterColumn>
        <div>Legal</div>
        <div>Privacy</div>
        <div>Terms</div>
        <div>Disclosures</div>
      </FooterColumn>
      <FooterColumn>
        <div>Contact</div>
        <div>Brands</div>
        <div>Press</div>
      </FooterColumn>
    </FooterContainer>
  );
};
