import { gql } from '@apollo/client';

//Fragment use agr yeh filelds zyada repeat ho rhi hon to uska fragmant bna lyty hain
export const CORE_COUNTRIES_FIELDS = gql`
  fragment coreCountriesFields on Country {
    name
    code
    native
    phone
    capital
    currency
    emoji
  }
`;

export const FETCH_COUNTRIES = gql`
 ${CORE_COUNTRIES_FIELDS}
query fetchCountries($countryCode : String!) {
   countries (filter: {code:{eq:$countryCode}}) {
   ...coreCountriesFields
  }
}`

export const FETCH_SINGLE_COUNTRY = gql`
 ${CORE_COUNTRIES_FIELDS}
query fetchSingleCountry {
    country(code:"PK"){
    ...coreCountriesFields
    }
}`


//Aliases Used in this query data will be with mycountry name
export const FETCH_MY_COUNTRY = gql`
 ${CORE_COUNTRIES_FIELDS}
query fetchMyCountry {
myCountry:country(code:"PK"){
    ...coreCountriesFields
    }
}
`
