import {getRandomInt, getRandomFloatInclusive} from './util.js';

const AVATAR_LINK = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME_CHECKIN = ['12:00', '13:00', '14:00'];
const TIME_CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

const getArrayRandomValue = (initialArray) => {
  const finalArray = [];
  initialArray.forEach((value)=>{if (getRandomInt(0,1)) {
    finalArray.push(value);
  }});
  return finalArray;
};

const createOffer = (i) => {
  const latValue = getRandomFloatInclusive(LAT_MIN, LAT_MAX, 5);
  const lngValue = getRandomFloatInclusive(LNG_MIN, LNG_MAX, 5);
  return {
    author: {avatar: `img/avatars/user${ AVATAR_LINK[i] }.png`},
    offer: {
      title: 'Сдается в аренду',
      address: `${latValue}, ${lngValue}`,
      price: getRandomInt(1, 100000),
      type: TYPES[getRandomInt(0,TYPES.length)],
      rooms: getRandomInt(1, 100000),
      guests: getRandomInt(1, 100000),
      checkin: TIME_CHECKIN[getRandomInt(0, TIME_CHECKIN.length)],
      checkout: TIME_CHECKOUT[getRandomInt(0, TIME_CHECKOUT.length)],
      features: getArrayRandomValue(FEATURES),
      description: 'Просторная и светлая, с развитой инфраструктурой',
      photos: getArrayRandomValue(PHOTOS),
    },
    location: {
      lat: latValue,
      lng: lngValue
    },
  };
};

const getOffers = (count) => Array.from({length: count}, (e,i) => createOffer(i));
export {getOffers};
