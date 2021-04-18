import { debounce } from 'lodash';
import API from './js/fetchCountries';
import countriesList from './templates/countriesList.hbs'
import countryCard from './templates/countriesCard.hbs'
import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import './js/styles.css';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  output: document.querySelector('.container'),
};

refs.searchForm.addEventListener('input', debounce(onSearch, 500))

function onSearch(event) {
    const searchQuery = event.target.value;
    refs.output.innerHTML = '';
     
  API.fetchCountries(searchQuery).then(data => {
    if (data.length > 10){
      console.log("Too many!");
      error({
        text: 'Too many fetches found!', closer: false, sticker: false, delay: 5000,
      });
    }

    if (data.length <= 10 && data.length >= 2) {
      console.log("countriesList");
      renderCountriesList(data);
    }

    if (data.length === 1) {
      API.fetchCountries(searchQuery).then(console.log)
      console.log("Card");
      renderCountryCard(data);
    }
  })
}

function renderCountriesList(list) {
refs.output.innerHTML = countriesList(list)
}

 function renderCountryCard(country) {
 refs.output.innerHTML = countryCard(country)
}