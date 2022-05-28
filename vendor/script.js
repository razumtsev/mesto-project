const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const editProfileButton = document.querySelector('.button_type_edit');
const addCardButton = document.querySelector('.button_type_add');
const closeButtons = document.querySelectorAll('.button_type_close');
const profileNickname = document.querySelector('.profile__nickname');
const profileOccupation = document.querySelector('.profile__occupation');
const formEditProfile = document.querySelector('.form_type_edit-profile');
const inputNickname = document.querySelector('.form__input_type_nickname');
const inputOccupation = document.querySelector('.form__input_type_occupation');
const formAddCard = document.querySelector('.form_type_add-card');
const inputCardName = document.querySelector('.form__input_type_card-name');
const inputImageLink = document.querySelector('.form__input_type_image-link');

const elementsGrid = document.querySelector('.elements__grid');
const cardTemplate = document.querySelector('#card-template').content;

function renderCard (card) {
  elementsGrid.prepend(card);
}

function buildCard (name, link) {
  const card = cardTemplate.querySelector('.elements__item').cloneNode(true);
  card.querySelector('.element__image').src = link;
  card.querySelector('.element__image').alt = name;
  card.querySelector('.element__caption').textContent = name;

  const cardRemoveButton = card.querySelector('.element__remove');
  cardRemoveButton.addEventListener('click', function () {
    cardRemoveButton.closest('.elements__item').remove();
  });

  renderCard(card);
}

function arrHandler (arr) {
  arr.forEach((element) => {
    buildCard(element.name, element.link);
  });
}

arrHandler (initialCards);

function openPopup (popupName) {
  popupName.classList.add('popup_is-open');
}

function closePopup () {
  document.querySelector('.popup_is-open').classList.remove('popup_is-open');
}

function openEditProfile () {
  inputNickname.value = profileNickname.textContent;
  inputOccupation.value = profileOccupation.textContent;
  openPopup(popupEditProfile);
}

function saveProfile (evt) {
  evt.preventDefault();
  profileNickname.textContent = inputNickname.value;
  profileOccupation.textContent = inputOccupation.value;
  closePopup();
}

function openAddCard () {
  openPopup(popupAddCard);
}

function saveCard (evt) {
  evt.preventDefault();
  buildCard(inputCardName.value, inputImageLink.value);
  closePopup();
}

const closeButtonsArr = Array.from(closeButtons);

closeButtonsArr.forEach((button) => {
  button.addEventListener('click', closePopup);
});


editProfileButton.addEventListener('click', openEditProfile);
addCardButton.addEventListener('click', openAddCard);
formEditProfile.addEventListener('submit', saveProfile);
formAddCard.addEventListener('submit', saveCard);