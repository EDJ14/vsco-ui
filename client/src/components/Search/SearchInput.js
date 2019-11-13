import React, { Component } from 'react';
import styled from 'styled-components';

import Results from './Results';

const InputContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  display: grid;
  grid-template-rows: 0.5fr 1fr 0.1fr 0.25fr 1fr;
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

class SearchInput extends Component {
  state = { searchTerm: '' };

  renderResults = () => {
    console.log('running');
    return this.state.searchTerm.length == 0 ? (
      <div />
    ) : (
      <Results input={this.state.searchTerm} />
    );
  };

  handleClick = e => {};

  render() {
    console.log(this.state.searchTerm.length);
    return [
      <InputContainer>
        <Input
          placeholder={'Search'}
          value={this.state.searchTerm}
          onChange={e => this.setState({ searchTerm: e.target.value })}
        ></Input>
        <Underline />
        <SearchCategoriesCont>
          <SearchCategories>People</SearchCategories>
          <SearchCategories>Images</SearchCategories>
          <SearchCategories>Journal</SearchCategories>
        </SearchCategoriesCont>
      </InputContainer>,
      this.renderResults()
    ];
  }
}

export default SearchInput;
