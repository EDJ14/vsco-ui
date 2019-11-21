import React, { useState } from 'react';
import axios from 'axios';

import keys from '../../config/keys';

const CitySearch = props => {
  const [term, setTerm] = useState('');

  let timeout = null;

  const autoCities = (e, timeout) => {
    setTerm(e.target.value);

    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      console.log('setTimeout');
      const instance = axios.create({
        baseURL: 'https://wft-geo-db.p.rapidapi.com',
        timeout: 1000,
        headers: {
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
          'x-rapidapi-key': '1c6be6c2c1msh899c6cdcf251ceep17fbafjsn92fd12f82cb0'
        }
      });

      const res = await instance.get(
        `/v1/geo/cities?limit=5&offset=0&namePrefix=${term}`
      );

      console.log('instance', res);
    }, 500);
  };

  return (
    <input
      style={{ margin: '15rem' }}
      value={term}
      onChange={e => autoCities(e, timeout)}
    />
  );
};

export default CitySearch;
