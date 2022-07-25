const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileAvatarChooser = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const filePhotoChooser = document.querySelector('.ad-form__upload input[type=file]');
const previewPhotoContainer = document.querySelector('.ad-form__photo');


fileAvatarChooser.addEventListener('change', () => {
  const file = fileAvatarChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
});

const createPhoto = (link) =>{
  const photo = document.createElement('img');
  photo.src = link;
  photo.textContent = 'Фотография жилья';
  photo.width = 70;
  photo.height = 70;
  return photo;
};

filePhotoChooser.addEventListener('change', () => {
  const file = filePhotoChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewPhotoContainer.appendChild(createPhoto(URL.createObjectURL(file)));
  }
});
