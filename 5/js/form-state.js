const form = document.querySelector('.ad-form');
const formElement = form.querySelector('.ad-form__element');
const mapFilter = document.querySelector('.map__filters');
const mapFilterElement = mapFilter.querySelector('.map__filter');
const mapFilterFeatures = mapFilter.querySelector('.map__features');

const formInactive = () => {
  form.classList.add('ad-form--disabled');
  formElement.disabled = true;
  mapFilter.classList.add('map__filters--disabled');
  mapFilterElement.disabled = true;
  mapFilterFeatures.disabled = true;
};

const formActive = () => {
  form.classList.remove('ad-form--disabled');
  formElement.disabled = false;
  mapFilter.classList.remove('map__filters--disabled');
  mapFilterElement.disabled = false;
  mapFilterFeatures.disabled = false;
};

export {formInactive, formActive};
