const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('.ad-form__element');
const mapFilter = document.querySelector('.map__filters');
const mapFilterElements = mapFilter.querySelectorAll('.map__filter');
const mapFilterFeatures = mapFilter.querySelector('.map__features');

const formInactive = () => {
  form.classList.add('ad-form--disabled');
  formElements.forEach((element)=>{element.disabled = true;});
  mapFilter.classList.add('map__filters--disabled');
  mapFilterElements.forEach((element)=>{element.disabled = true;});
  mapFilterFeatures.disabled = true;
};

const formSubmitActive = () => {
  form.classList.remove('ad-form--disabled');
  formElements.forEach((element)=>{element.disabled = false;});
};

const formFilterActive = () => {
  mapFilter.classList.remove('map__filters--disabled');
  mapFilterElements.forEach((element)=>{element.disabled = false;});
  mapFilterFeatures.disabled = false;
};

export {formInactive, formSubmitActive, formFilterActive, mapFilter};
