const OFFERS_COUNT = 10;
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;
const filters = document.querySelector('.map__filters');
const mapFeatures = filters.querySelector('.map__features');
const housingType = filters.querySelector('#housing-type');
const housingPrice = filters.querySelector('#housing-price');
const housingRooms = filters.querySelector('#housing-rooms');
const housingGuests = filters.querySelector('#housing-guests');

const checkType = (offer)=> {
  if (housingType.value === 'any') {return true;}
  return offer.offer.type === housingType.value;
};

const checkPryce = (offer)=> {
  if (housingPrice.value === 'any') {return true;}
  if (housingPrice.value === 'low') {return offer.offer.price < LOW_PRICE;}
  if (housingPrice.value === 'middle') {return offer.offer.price >= LOW_PRICE && offer.offer.price <= HIGH_PRICE;}
  if (housingPrice.value === 'high') {return offer.offer.price >HIGH_PRICE;}
};

const checkRooms = (offer)=> {
  if (housingGuests.value === 'any' || offer.offer.guests === +housingGuests.value) {return true;}
  return false;
};

const checkGuests = (offer)=> {
  if (housingRooms.value === 'any' || offer.offer.rooms === +housingRooms.value) {return true;}
  return false;
};

const checkFeatures = (offer, features)=> {
  let checkSum = 0;
  if (offer.offer.features && features.length>0) {for (let i=0; i<features.length; i++){
    if (offer.offer.features.includes(features[i])) {checkSum++;}
  }
  return checkSum===features.length;}
  if (offer.offer.features && features.length===0) {return true;}
  if (!offer.offer.features && features.length===0) {return true;}
  if (!offer.offer.features && features.length>0) {return false;}
};

const getFilterData = (offers) => {
  const featuresFilterChecked = [];
  mapFeatures.querySelectorAll('input[type=checkbox]').forEach((elem)=>{if (elem.checked) {featuresFilterChecked.push(elem.value);}});
  const newOffers = [];
  for (const offer of offers) {
    if (newOffers.length >= OFFERS_COUNT) {break;}
    if (checkType(offer) &&
    checkPryce(offer) &&
    checkRooms(offer) &&
    checkGuests(offer) &&
    checkFeatures(offer, featuresFilterChecked)) {
      newOffers.push(offer);
    }
  }
  return newOffers;
};

const setFilterChange = (cb) => {
  filters.addEventListener('change', () => {
    cb();
  });
};

export {getFilterData, setFilterChange};
