import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import keys from '../../config/keys';

const CitySuggestBox = styled.div`
  width: max-content;
  background-color: black;

  display: flex;
  flex-direction: column;
  flex-spacing: space-between;
`;

const CitySearchItem = styled.div`
  width: 100%;
  color: white;
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
        console.log('tuneitState');
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

  return [
    <input
      style={{ margin: '15rem' }}
      value={term}
      onChange={e => autoCities(e, timeout)}
    />,
    renderCitySuggest()
  ];
};

export default CitySearch;
