
const BASE_URL = 'https://restcountries.eu/rest/v2/';

function fetchCountries(searchQuery) {
    fetch(`${BASE_URL}name/${searchQuery}`)
    .then(result => result.json())
    .then(console.log)
}

export default { fetchCountries };