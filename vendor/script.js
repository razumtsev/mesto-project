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
const formAddCard = document.querySelector('form_type_add-card');
const inputNickname = document.querySelector('.form__input_type_nickname');
const inputOccupation = document.querySelector('.form__input_type_occupation');

const elementsGrid = document.querySelector('.elements__grid');
const cardTemplate = document.querySelector('#card-template').content;

function renderCard (card) {
  elementsGrid.append(card);
}

function buildCard (name, link) {
  const card = cardTemplate.querySelector('.elements__item').cloneNode(true);
  card.querySelector('.element__image').src = link;
  card.querySelector('.element__image').alt = name;
  card.querySelector('.element__caption').textContent = name;
  renderCard(card);
}

/*
function arrHandler (arr) {
  for(let i = 0; i < arr.length; i++) {
      buildCard(arr[i].name, arr[i].link);
  }
}
*/

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
  /*popup.classList.remove('popup_is-open');*/
  /*evt.target.closest('.popup').classList.remove('popup_is-open');*/
  document.querySelector('.popup_is-open').classList.remove('popup_is-open');
}

function fillEditProfile () {
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

const closeButtonArr = Array.from(closeButtons);

closeButtonArr.forEach((button) => {
  button.addEventListener('click', closePopup);
});

editProfileButton.addEventListener('click', fillEditProfile);
addCardButton.addEventListener('click', openAddCard);
formEditProfile.addEventListener('submit', saveProfile);
formAddCard.addEventListener('submit', addCard);