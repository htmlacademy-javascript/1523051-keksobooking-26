const ALERT_SHOW_TIME = 5000;

const messageSuccessTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const messageErrorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const closeErrorAlertButton = messageErrorTemplate.querySelector('.error__button');

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlertErrorGet = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '999';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const onSuccessEscPress = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccess();
  }
};

function closeSuccess () {
  messageSuccessTemplate.remove();
  document.removeEventListener('keydown', onSuccessEscPress);
}

const showAlertSuccessSend = () => {
  document.body.append(messageSuccessTemplate);

  messageSuccessTemplate.addEventListener('click', ()=>{
    closeSuccess();
  });

  document.addEventListener('keydown', onSuccessEscPress);
};

const onErrorEscPress = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeError();
  }
};

function closeError () {
  messageErrorTemplate.remove();
  document.removeEventListener('keydown', onErrorEscPress);
}

const showAlertErrorSend = () => {
  document.body.append(messageErrorTemplate);

  messageErrorTemplate.addEventListener('click', ()=>{
    closeError();
  });

  closeErrorAlertButton.addEventListener('click', ()=>{
    closeError();
  });

  document.addEventListener('keydown', onErrorEscPress);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {showAlertErrorGet, showAlertSuccessSend, showAlertErrorSend, debounce};
