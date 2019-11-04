import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  grid-row: 2 / -1;
  grid-column: 2 / 3;

  display: grid;
  grid-template-rows: 0.5fr 1fr 0.1fr 0.25fr 1fr 1fr;
`;

const Input = styled.input`
  grid-row: 2 / 3;
  background-color: white;
  font-size: 2.5rem;
  border: none;
  margin-top: 2rem;

  &:focus {
    outline: none;
  }
`;

const Underline = styled.div`
  grid-row: 3 / 4;
  height: 0.1rem;
  background-color: grey;
`;

const SearchCategoriesCont = styled.div`
  grid-row: 4 / 5;
  display: flex;
`;

const SearchCategories = styled.div`
  font-size: 1.5rem;
  color: ${props => (props.color ? 'black' : 'grey')};
  margin-right: 2rem;
`;

const handleClick = () => {};

export default props => {
  return (
    <InputContainer>
      <Input placeholder={'Search'}></Input>
      <Underline />
      <SearchCategoriesCont>
        <SearchCategories>People</SearchCategories>
        <SearchCategories>Images</SearchCategories>
        <SearchCategories>Journal</SearchCategories>
      </SearchCategoriesCont>
    </InputContainer>
  );
};