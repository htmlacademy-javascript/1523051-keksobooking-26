import {sendData} from './api.js';
import {showAlertErrorSend, showAlertSuccessSend} from './util.js';
import {mapFilter} from './form-state.js';
import {previewPhotoContainer, previewAvatar} from './add-photo.js';
import {map, mainPinMarker} from './map.js';

const MIN_PRICE = 0;
const MAX_PRICE = 100000;
const BUNGALOW_PRICE = 0;
const FLAT_PRICE = 1000;
const HOUSE_PRICE = 3000;
const HOTEL_PRICE = 5000;
const PALACE_PRICE = 10000;
const latCenter = 35.70000;
const lngCenter = 139.42500;
const NO_ROOMS = '0';
const ONE_ROOMS = '1';
const TWO_ROOMS = '2';
const THREE_ROOMS = '3';


const form = document.querySelector('.ad-form');
const sendButton = document.querySelector('.ad-form__submit');
const resetButton = form.querySelector('.ad-form__reset');
const address = form.querySelector('#address');

const houseTypeField = form.querySelector('#type');
const housePriceField = form.querySelector('#price');
const sliderElement = form.querySelector('.ad-form__slider');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

noUiSlider.create(sliderElement, {
  range: {
    min: MIN_PRICE,
    max: MAX_PRICE,
  },
  start: 0,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  housePriceField.value = sliderElement.noUiSlider.get();
});

const setPriceField = (value) => {
  housePriceField.placeholder=value;
  housePriceField.min=value;
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: value,
      max: MAX_PRICE,
    },
    start: value,
  });
};

const setPriceForHouseType = () => {
  switch (houseTypeField.value) {
    case 'flat':
      setPriceField(FLAT_PRICE);
      break;
    case 'bungalow':
      setPriceField(BUNGALOW_PRICE);
      break;
    case 'house':
      setPriceField(HOTEL_PRICE);
      break;
    case 'palace':
      setPriceField(PALACE_PRICE);
      break;
    case 'hotel':
      setPriceField(HOUSE_PRICE);
      break;
  }
};

window.addEventListener ('load', ()=> {
  address.value = `${latCenter.toFixed(5)}, ${lngCenter.toFixed(5)  }`;
  setPriceForHouseType();
});

const resetFormFields = () => {
  form.reset();
  mapFilter.reset();
  previewPhotoContainer.innerHTML = '';
  previewAvatar.src = 'img/muffin-grey.svg';
  address.value = `${latCenter.toFixed(5)}, ${lngCenter.toFixed(5)  }`;
  setPriceForHouseType();
  mainPinMarker.setLatLng({
    lat: latCenter,
    lng: lngCenter,
  });
  map.flyTo({
    lat: latCenter,
    lng: lngCenter,
  }, 10);
};

const resetSubmitForm = (cb) => {
  const resetForm = () => {
    resetFormFields();
    cb();
  };
  form.addEventListener('reset', resetForm);
};

houseTypeField.addEventListener ('change', ()=> {
  setPriceForHouseType();
});

const validatePrice = () => parseInt(housePriceField.min,10) <= housePriceField.value;

pristine.addValidator(
  form.querySelector('#price'),
  validatePrice,
  'Указанная сумма меньше минимальной'
);

const roomNumber = form.querySelector('#room_number');
const guestNumber = form.querySelector('#capacity');

const validateGuestNumber = () => roomNumber.value >= guestNumber.value;

const getGuestsErrorMessage = () => {
  switch (roomNumber.value) {
    case THREE_ROOMS:
      return 'для 1 гостя, для 2 гостей или для 3 гостей';
    case TWO_ROOMS:
      return 'для 1 гостя или для 2 гостей';
    case ONE_ROOMS:
      return 'для 1 гостя';
    case NO_ROOMS:
      return 'не для гостей';
  }
};

pristine.addValidator(guestNumber, validateGuestNumber, getGuestsErrorMessage);

const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

timeIn.addEventListener('change',()=>{
  timeOut.value=timeIn.value;
});
timeOut.addEventListener('change',()=>{
  timeIn.value=timeOut.value;
});

resetButton.addEventListener('click',(evt)=>{
  evt.preventDefault();
  resetFormFields();
});

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      sendButton.disabled = true;
      sendData(
        ()=>{showAlertSuccessSend();
          resetFormFields();
          sendButton.disabled = false;},
        ()=>{showAlertErrorSend();
          sendButton.disabled = false;},
        new FormData(evt.target),
      );
    }
  });};

export {latCenter, lngCenter, address, setUserFormSubmit, form, resetSubmitForm};
