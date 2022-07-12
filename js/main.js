import {setOffersPin} from './map.js';
import './form-validation.js';
import './map.js';
import {getData} from './api.js';
import {showAlertError} from './util.js';
import {setUserFormSubmit} from './form-validation.js';


getData(setOffersPin, showAlertError);
setUserFormSubmit();
