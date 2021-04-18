import { debounce } from 'lodash';
import API from './js/fetchCountries';
// import countriesListTemplate from './templates/countriesList.hbs'
// import countryCardTemplate from './templates/countriesCard.hbs'
// import { error } from '@pnotify/core';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/PNotify.css';
// import '../css/style.css';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  output: document.querySelector('container'),
};

refs.searchForm.addEventListener('input', debounce(onSearch, 500))

function onSearch(event) {
    const searchQuery = event.target.value;
     
  API.fetchCountries(searchQuery)
}

console.log(API.BASE_URL);

// function renderCountriesList(listData) {
//   refs.output.innerHTML = countriesListTemplate(listData)
// }

// function renderCountryCard(countryData) {
//   refs.output.innerHTML = countryCardTemplate(countryData)
// }