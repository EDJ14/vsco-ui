import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import keys from '../../config/keys';
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
  state = { searchTerm: '', timeout: 0, results: [] };

  renderResults = e => {
    console.log('e', e.target.value);
    this.setState({ searchTerm: e.target.value, showResults: 1 });

    if (e.target.value == 0) {
      console.log('0 length');
      this.setState({ results: [] });
      return;
    }

    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
    }

    return this.setState({
      timeout: setTimeout(async () => {
        const instance = axios.create({
          baseURL: 'https://api.nytimes.com',
          timeout: 5000
        });

        const res = await instance.get(
          `/svc/search/v2/articlesearch.json?q=${this.state.searchTerm}&api-key=${keys.NYTkey}`
        );

        this.setState({
          results: <Results articles={res.data.response.docs} />
        });
      }, 500)
    });
  };

  render() {
    return [
      <InputContainer>
        <Input
          autoFocus
          className={'search-input'}
          placeholder={'Search'}
          value={this.state.searchTerm}
          onChange={e => this.renderResults(e)}
        ></Input>
        <Underline />
        <SearchCategoriesCont>
          <SearchCategories>People</SearchCategories>
          <SearchCategories>Images</SearchCategories>
          <SearchCategories>Journal</SearchCategories>
        </SearchCategoriesCont>
      </InputContainer>,
      this.state.results
    ];
  }
}

export default SearchInput;
