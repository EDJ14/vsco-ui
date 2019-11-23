import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import keys from '../../config/keys';

const CityContainer = styled.div`
  width: 100%;
  height: 87vh;
  position: absolute;
  bottom: 0;
  background-color: gray;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CityInput = styled.input`
  width: 35rem;
  height: 5rem;
  font-size: 4rem;
`;

const CitySuggestBox = styled.div`
  width: 35rem;
  height: 5rem;
  font-size: 4rem;

  display: flex;
  flex-direction: column;
  flex-spacing: space-between;
`;

const CitySearchItem = styled.div`
  width: 100%;
  color: white;

  &:hover {
    color: black;
  }
`;

const CitySearch = props => {
  const [term, setTerm] = useState('');
  const [timeout, timeoutState] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  const autoCities = (e, timeout) => {
    setTerm(e.target.value);
    e.target.value.length == 0 ? setShowSuggestions(0) : setShowSuggestions(1);

    if (timeout) {
      clearTimeout(timeout);
    }

    return timeoutState(
      setTimeout(async () => {
        const instance = axios.create({
          baseURL: 'https://wft-geo-db.p.rapidapi.com',
          timeout: 1000,
          headers: {
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            'x-rapidapi-key':
              '1c6be6c2c1msh899c6cdcf251ceep17fbafjsn92fd12f82cb0'
          }
        });

        const res = await instance.get(
          `/v1/geo/cities?limit=5&offset=0&namePrefix=${term}`
        );

        setSuggestions(res.data.data.map(result => result.city));
      }, 500)
    );
  };

  const renderCitySuggest = () => {
    if (!showSuggestions) {
      return;
    }

    return (
      <CitySuggestBox>
        {suggestions.map(city => (
          <CitySearchItem>{city}</CitySearchItem>
        ))}
      </CitySuggestBox>
    );
  };

  return (
    <CityContainer>
      <CityInput value={term} onChange={e => autoCities(e, timeout)} />
      {renderCitySuggest()}
    </CityContainer>
  );
};

export default CitySearch;
