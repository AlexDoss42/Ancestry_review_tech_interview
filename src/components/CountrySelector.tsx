import React, { useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

import './CountrySelector.css';

function CountrySelector({ countryHandler, displayCountry }): JSX.Element {
  const options = useMemo(() => countryList().getData(), [])

  return (
    <>
      <label htmlFor="country">Country</label>
      <Select id="country" className='country-selector' options={options} value={displayCountry} onChange={countryHandler} />
    </>
  )
}

export default CountrySelector;
