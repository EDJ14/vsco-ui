import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdSearch } from 'react-icons/io';
import { IconContext } from 'react-icons';

const HeaderContainer = styled.div`
  height: 14.5vh;
  width: 100%;
  position: absolute;
`;

const HeaderItemsBox = styled.div`
  height: 100%;
  padding: 3rem;

  display: flex;
  align-items: center;
  background-color: white;
`;

const SearchGlass = styled.div`
  margin-right: auto;
  cursor: pointer;
`;

const HeaderButtons = styled.div`
  padding: 2rem;
  font-size: 1.35rem;
  font-weight: ${props => props.bold};
`;

export default () => {
  return (
    <HeaderContainer>
      <HeaderItemsBox>
        <SearchGlass>
          <Link to="/search">
            <IconContext.Provider value={{ size: '3.5rem' }}>
              <IoMdSearch />
            </IconContext.Provider>
          </Link>
        </SearchGlass>
        <HeaderButtons bold={'bold'}>
          <Link to="/">VSCO</Link>
        </HeaderButtons>
        <HeaderButtons>Feed</HeaderButtons>
        <HeaderButtons>Sign In</HeaderButtons>
        <div
          style={{
            width: '13rem',
            height: '4.5rem',
            textAlign: 'center',
            lineHeight: '4.4rem',
            borderRadius: '.3rem',
            fontSize: '1.35rem',
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: 'black'
          }}
        >
          Get the App
        </div>
      </HeaderItemsBox>
    </HeaderContainer>
  );
};
