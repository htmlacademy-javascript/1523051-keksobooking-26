const messageSuccessTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const messageErrorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const closeErrorAlertButton = messageErrorTemplate.querySelector('.error__button');

const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatInclusive = (min, max, afterPoint) => {
  if (max>min) {
    return Number((min + Math.random() * (max - min)).toFixed(afterPoint));}
  if (min===max) {
    return Number(min.toFixed(afterPoint));
  }
  return 'Значение От больше значения До';
};

const ALERT_SHOW_TIME = 5000;

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

const showAlertSuccessSend = () => {
  document.body.append(messageSuccessTemplate);

  messageSuccessTemplate.addEventListener('click', ()=>{
    messageSuccessTemplate.remove();
  });

  document.addEventListener('keydown', (evt)=>{
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      messageSuccessTemplate.remove();
    }
  });
};

const showAlertErrorSend = () => {
  document.body.append(messageErrorTemplate);

  messageErrorTemplate.addEventListener('click', ()=>{
    messageErrorTemplate.remove();
  });

  closeErrorAlertButton.addEventListener('click', ()=>{
    messageErrorTemplate.remove();
  });

  document.addEventListener('keydown', (evt)=>{
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      messageErrorTemplate.remove();
    }
  });
};

export {getRandomInt, getRandomFloatInclusive, showAlertErrorGet, showAlertSuccessSend, showAlertErrorSend};