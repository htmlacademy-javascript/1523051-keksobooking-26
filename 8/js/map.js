import {latCenter, lngCenter, address} from './form-validation.js';
import {formActive} from './form-state.js';
import {renderOffer} from './render.js';

const map = L.map('map-canvas')
  .on('load', () => {
    formActive();
  })
  .setView({
    lat: latCenter,
    lng: lngCenter,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: latCenter,
    lng: lngCenter,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)  }`;
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup().addTo(map);

const setOffersPin = (offers) => {
  offers.forEach((offer) => {

    const lat = offer.location.lat;
    const lng = offer.location.lng;
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );
    marker
      .addTo(markerGroup)
      .bindPopup(renderOffer(offer));
  });
};

export {setOffersPin};


