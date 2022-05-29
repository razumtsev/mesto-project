/* объявление глобальных переменных */
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupFullsizeImage = document.querySelector('.popup_type_fullsize-image');
const buttonEditProfile = document.querySelector('.button_type_edit');
const buttonAddCard = document.querySelector('.button_type_add');
const buttonsClose = document.querySelectorAll('.button_type_close');
const profileNickname = document.querySelector('.profile__nickname');
const profileOccupation = document.querySelector('.profile__occupation');
const formEditProfile = popupEditProfile.querySelector('.form_type_edit-profile');
const inputNickname = formEditProfile.querySelector('.form__input_type_nickname');
const inputOccupation = formEditProfile.querySelector('.form__input_type_occupation');
const formAddCard = popupAddCard.querySelector('.form_type_add-card');
const inputCardName = formAddCard.querySelector('.form__input_type_card-name');
const inputImageLink = formAddCard.querySelector('.form__input_type_image-link');
const fullscreenPictureImage = popupFullsizeImage.querySelector('.fullscreen-picture__image');
const fullscreenPictureCaption = popupFullsizeImage.querySelector('.fullscreen-picture__caption');

const elementsGrid = document.querySelector('.elements__grid');
const cardTemplate = document.querySelector('#card-template').content;

/* добавление карточки в elements_grid */
function renderCard (card) {
  elementsGrid.prepend(card);
}

/* сборка карточки */
function buildCard (name, link) {
  const card = cardTemplate.querySelector('.elements__item').cloneNode(true);
  card.querySelector('.element__image').src = link;
  card.querySelector('.element__image').alt = name;
  card.querySelector('.element__caption').textContent = name;

  /* открытие полноразмерной картинки */
  const fullsizeImage = card.querySelector('.element__image');
  fullsizeImage.addEventListener('click', function () {
    fullscreenPictureImage.src = link;
    fullscreenPictureImage.alt = name;
    fullscreenPictureCaption.textContent = name;
    openPopup(popupFullsizeImage);
  });

  /* функциональность кнопки "Лайк" */
  const likeButton = card.querySelector('.element__like');
  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_is-active');
  });

  /* функциональность кнопки "Удаление карточки" */
  const cardRemoveButton = card.querySelector('.element__remove');
  cardRemoveButton.addEventListener('click', function () {
    cardRemoveButton.closest('.elements__item').remove();
  });

  renderCard(card);
}

/* обработка массива карточек при первоначальной загрузке страницы */
function processArray (arr) {
  arr.forEach((element) => {
    buildCard(element.name, element.link);
  });
}

/* вызов функции-обработчика массива */
processArray (initialCards);

/* открытие модального окна */
function openPopup (popupName) {
  popupName.classList.add('popup_is-open');
}

/* закрытие модального окна */
function closePopup () {
  document.querySelector('.popup_is-open').classList.remove('popup_is-open');
}

/* вызов открытия окна редактирования профиля */
function openEditProfile () {
  inputNickname.value = profileNickname.textContent;
  inputOccupation.value = profileOccupation.textContent;
  openPopup(popupEditProfile);
}

/* сохранение данных из окна редактирования профиля */
function saveProfile (evt) {
  evt.preventDefault();
  profileNickname.textContent = inputNickname.value;
  profileOccupation.textContent = inputOccupation.value;
  closePopup();
}

/* вызов открытия окна добавления карточки */
function openAddCard () {
  openPopup(popupAddCard);
}

/* добавление карточки на страницу */
function saveCard (evt) {
  evt.preventDefault();
  buildCard(inputCardName.value, inputImageLink.value);
  inputCardName.value = '';
  inputImageLink.value = '';
  closePopup();
}

/* обработка кликов по кнопкам закрытия модальных окон */
Array.from(buttonsClose).forEach((button) => {
  button.addEventListener('click', closePopup);
});

/* слушатели событий на странице */
buttonEditProfile.addEventListener('click', openEditProfile);
buttonAddCard.addEventListener('click', openAddCard);
formEditProfile.addEventListener('submit', saveProfile);
formAddCard.addEventListener('submit', saveCard);