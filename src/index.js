import { debounce } from 'lodash';
import API from './js/fetchCountries';
import countriesListTemplate from './templates/countriesList.hbs'
import countryCardTemplate from './templates/countriesCard.hbs'
// import { error } from '@pnotify/core';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/PNotify.css';
// import '../css/style.css';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  output: document.querySelector('.container'),
};

refs.searchForm.addEventListener('input', debounce(onSearch, 500))

function onSearch(event) {
  refs.output.innerHTML = '';
   
  const searchQuery = event.target.value.trim();
  if (searchQuery === "") {
    return
  }
  
  API.fetchCountriesList(searchQuery).then(data => {
    if (!data || !data.length) {
  return
  };
    if (data.length > 10) {
      console.warn("Too many items");
      error({
        text: 'Too many items to show, please enter more specific query',
        delay: 4000,
      });
    } else if (data.length <= 10 && data.length > 1) {
            
      renderCountriesList(data);
     }
      else if (data.length === 1) {
      renderCountryCard(data)
     }
})
}

function renderCountriesList(listData) {
  refs.output.innerHTML = countriesListTemplate(listData)
}

function renderCountryCard(countryData) {
  refs.output.innerHTML = countryCardTemplate(countryData)
}