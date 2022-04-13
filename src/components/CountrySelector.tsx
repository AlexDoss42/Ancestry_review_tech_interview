import React, { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector({ countryHandler, displayCountry}): JSX.Element {
  const options = useMemo(() => countryList().getData(), [])

  return <Select options={options} value={displayCountry} onChange={countryHandler} />
}

export default CountrySelector;
