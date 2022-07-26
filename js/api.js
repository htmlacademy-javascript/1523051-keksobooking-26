const SERVER_ADDRESS = 'https://26.javascript.pages.academy/keksobooking';
const getData = (onSuccess, onFail) => {
  fetch(`${SERVER_ADDRESS}/data`)
    .then((response) => response.json())
    .then((array) => {
      onSuccess(array);
    })
    .catch(() => {
      onFail('Не удалось загрузить данные с сервера. Попробуйте ещё раз');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER_ADDRESS,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
