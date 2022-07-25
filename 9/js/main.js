import {setOffersPin} from './map.js';
import './form-validation.js';
import './map.js';
import {getData} from './api.js';
import {showAlertErrorGet, debounce} from './util.js';
import {setUserFormSubmit} from './form-validation.js';
import {setFilterChange} from './filter.js';
import './add-photo.js';

const RERENDER_DELAY = 500;

getData((offers)=>{
  setOffersPin(offers);
  setFilterChange(debounce(()=>{setOffersPin(offers);}, RERENDER_DELAY));
}, showAlertErrorGet);
setUserFormSubmit();


