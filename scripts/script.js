/* объявление глобальных переменных */
const popupList = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupFullsizeImage = document.querySelector('.popup_type_fullsize-image');
const buttonEditProfile = document.querySelector('.button_type_edit');
const buttonAddCard = document.querySelector('.button_type_add');
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
function renderCard (element) {
  const card = buildCard(element);
  elementsGrid.prepend(card);
}

/* обработка клика по карточке - открытие полноразмерной картинки */
function handleCardClick (cardEssence) {
  fullscreenPictureImage.src = cardEssence.link;
  fullscreenPictureImage.alt = cardEssence.name;
  fullscreenPictureCaption.textContent = cardEssence.name;
  openPopup(popupFullsizeImage);
}

/* обработка клика по кнопке "лайк" */
function handleLikeClick(likeButton) {
  likeButton.classList.toggle('element__like_is-active');
}

/* сборка карточки */
function buildCard (cardEssence) {
  const card = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const elementImage = card.querySelector('.element__image');
  const elementCaption = card.querySelector('.element__caption');
  elementImage.src = cardEssence.link;
  elementImage.alt = cardEssence.name;
  elementCaption.textContent = cardEssence.name;

  /* вызов обработчика клика по карточке */
  elementImage.addEventListener('click', () => handleCardClick(cardEssence));

  /* вызов обработчика кнопки "Лайк" */
  const likeButton = card.querySelector('.element__like');
  likeButton.addEventListener('click', () => handleLikeClick(likeButton));

  /* функциональность кнопки "Удаление карточки" */
  const cardRemoveButton = card.querySelector('.element__remove');
  cardRemoveButton.addEventListener('click', function () {
    cardRemoveButton.closest('.elements__item').remove();
  });

  return card;
}

/* обработка массива карточек при первоначальной загрузке страницы */
function processArray (arr) {
  arr.forEach((element) => {
    renderCard(element);
  });
}

/* вызов функции-обработчика массива */
processArray (initialCards);

/* открытие модального окна */
function openPopup (popupName) {
  popupName.classList.add('popup_is-open');
}

/* закрытие модального окна */
function closePopup(popupName) {
  popupName.classList.remove('popup_is-open');
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
  closePopup(popupEditProfile);
}

/* вызов открытия окна добавления карточки */
function openAddCard () {
  openPopup(popupAddCard);
}

/* добавление карточки на страницу */
function saveCard (evt) {
  evt.preventDefault();
  const objForTransfer = {};
  objForTransfer.name = inputCardName.value;
  objForTransfer.link = inputImageLink.value;
  renderCard(objForTransfer);
  closePopup(popupAddCard);
  formAddCard.reset();
}

/* слушатели событий на странице */
buttonEditProfile.addEventListener('click', openEditProfile);
buttonAddCard.addEventListener('click', openAddCard);
formEditProfile.addEventListener('submit', saveProfile);
formAddCard.addEventListener('submit', saveCard);

/* поиск кнопок закрытия во всех попапах и добавление им слушателя клика */
popupList.forEach(item => {
  item.querySelector('.button_type_close').addEventListener('click', () => closePopup(item));
});