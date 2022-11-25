import React from 'react'
import { useQuery,gql } from '@apollo/client';
import { CORE_COUNTRIES_FIELDS } from '../GraphQl/queries';


const useCountry = (countryCode) => {

    const defaultCountryCode = countryCode ? countryCode : "PK"

    const FETCH_COUNTRIES = gql`
    ${CORE_COUNTRIES_FIELDS}
   query fetchCountries($countryCode : String!) {
   countries (filter: {code:{eq:$countryCode}}) {
   ...coreCountriesFields
  } 
    }`

    const { loading, error, data } = useQuery(FETCH_COUNTRIES,{
        variables: { countryCode: defaultCountryCode }
    });


    return {
        loading,
        error,
        data
    }
}

export default useCountry
