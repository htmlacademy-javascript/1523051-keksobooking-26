const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getHouseType = (value) => {
  switch (value) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
};

const getRoomEnding = (value) => {
  if (value % 100 <= 20) {
    if (value % 100 === 1) { return ' комната';}
    if (value % 100 >= 2 && value % 100<= 4) { return ' комнаты';}
    if (value % 100 >= 5 && value % 100<= 20) { return ' комнат';}
  } else {
    const lastDigit = value % 10;
    if (lastDigit === 1) { return ' комната';}
    if (lastDigit >= 2 && lastDigit<= 4) { return ' комнаты';}
    if (lastDigit >= 5 && lastDigit<= 9 || lastDigit===0) { return ' комнат';}
  }
};

const getGuestsEnding = (value) => {
  if (value % 100 <= 20) {
    if (value % 100 === 1) { return ' гостя';}
    if (value % 100 >= 2 && value % 100<= 20) { return ' гостей';}
  } else {
    const lastDigit = value % 10;
    if (lastDigit === 1) { return ' гостя';}
    if (lastDigit >= 2 && lastDigit<= 9 || lastDigit===0) { return ' гостей';}
  }
};

const createImage = (link) =>{
  const image = document.createElement('img');
  image.classList.add('popup__photos');
  image.src = link;
  image.textContent = 'Фотография жилья';
  image.width = 45;
  image.height = 40;
  return image;
};

const renderOffer = (offer) => {
  const offerElement = offerTemplate.cloneNode(true);
  offerElement.querySelector('.popup__avatar').src = offer.author.avatar;
  offerElement.querySelector('.popup__title').textContent = offer.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = `${offer.location.lat  } ${  offer.location.lng}`;
  offerElement.querySelector('.popup__text--price').textContent = `${offer.offer.price  } ₽/ночь`;
  offerElement.querySelector('.popup__type').textContent = getHouseType(offer.offer.type);
  offerElement.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms + getRoomEnding(offer.offer.rooms)  } для ${  offer.offer.guests  }${getGuestsEnding(offer.offer.guests)}`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${  offer.offer.checkin  }, выезд до ${  offer.offer.checkout}`;

  const featureContainer = offerElement.querySelector('.popup__features');
  const featureListFragment = document.createDocumentFragment();
  if (!offer.offer.features) {
    featureContainer.innerHTML = '';
  } else {
    offer.offer.features.forEach((featureItem) => {
      const featureListItem = featureContainer.querySelector(`.popup__feature--${  featureItem}`);

      if (featureListItem) {
        featureListFragment.append(featureListItem);
      }
    });
    featureContainer.innerHTML = '';
    featureContainer.append(featureListFragment);
  }


  offerElement.querySelector('.popup__description').textContent = offer.offer.description;

  const photoContainer = offerElement.querySelector('.popup__photos');
  photoContainer.innerHTML = '';
  if (offer.offer.photos) {
    offer.offer.photos.forEach((photo) => {
      photoContainer.append(createImage(photo));
    });
  }
  return offerElement;

};

export {renderOffer};
