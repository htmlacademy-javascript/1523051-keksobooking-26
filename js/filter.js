const filters = document.querySelector('.map__filters');
const mapFeatures = filters.querySelector('.map__features');
const housingType = filters.querySelector('#housing-type');
const housingPrice = filters.querySelector('#housing-price');
const housingRooms = filters.querySelector('#housing-rooms');
const housingGuests = filters.querySelector('#housing-guests');

const getFilterData = (offers) => {
  const featuresFilterChecked = [];
  mapFeatures.querySelectorAll('input[type=checkbox]').forEach((elem)=>{if (elem.checked) {featuresFilterChecked.push(elem.value);}});
  const newOffers = offers.filter(
    (offer)=>{
      if (housingType.value === 'any') {return true;}
      else {return offer.offer.type === housingType.value;}
    })
    .filter(
      (offer)=>{
        if (housingPrice.value === 'any') {return true;}
        if (housingPrice.value === 'low') {return offer.offer.price < 10000;}
        if (housingPrice.value === 'middle') {return offer.offer.price >= 10000 && offer.offer.price <= 50000;}
        if (housingPrice.value === 'high') {return offer.offer.price >50000;}
      })
    .filter(
      (offer)=>{
        if (housingRooms.value === 'any') {return true;}
        if (housingRooms.value === '1') {return offer.offer.rooms === 1;}
        if (housingRooms.value === '2') {return offer.offer.rooms === 2;}
        if (housingRooms.value === '3') {return offer.offer.rooms === 3;}
      })
    .filter(
      (offer)=>{
        if (housingGuests.value === 'any') {return true;}
        if (housingGuests.value === '1') {return offer.offer.guests === 1;}
        if (housingGuests.value === '2') {return offer.offer.guests === 2;}
        if (housingGuests.value === '0') {return offer.offer.guests === 0;}
      }).filter((offer)=>{
      let checkSum = 0;
      for (let i=0; i<featuresFilterChecked.length; i++){
        if (offer.offer.features.includes(featuresFilterChecked[i])) {checkSum++;}
      }
      return checkSum===featuresFilterChecked.length;
    });

  return newOffers;
};

const ss = (cb) => {
  document.querySelector('.filter').addEventListener('click', () => {
    cb();
  });
};

export {getFilterData, ss};
