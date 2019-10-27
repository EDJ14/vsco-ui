import React from 'react';
import styled from 'styled-components';

const HeaderItemsBox = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  background-color: white;
`;

const SearchGlass = styled.div`
  margin-right: auto;
`;

export default () => {
  return (
    <HeaderItemsBox>
      <SearchGlass>1</SearchGlass>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </HeaderItemsBox>
  );
};
