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
        <div style={{ padding: '2rem', fontSize: '2rem' }}>VSCO</div>
        <div style={{ padding: '2rem', fontSize: '2rem' }}>Feed</div>
        <div style={{ padding: '2rem', fontSize: '2rem' }}>Sign In</div>
        <div
          style={{
            padding: '.5rem 1.5rem',
            fontSize: '2rem',
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
