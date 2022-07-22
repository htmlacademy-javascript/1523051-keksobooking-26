import {setOffersPin} from './map.js';
import './form-validation.js';
import './map.js';
import {getData} from './api.js';
import {showAlertErrorGet} from './util.js';
import {setUserFormSubmit} from './form-validation.js';
import {ss} from './filter.js';


// getData(setOffersPin, showAlertErrorGet);
getData((offers)=>{//setOffersPin(offers);
  ss(()=>{setOffersPin(offers);});}, showAlertErrorGet);
setUserFormSubmit();


