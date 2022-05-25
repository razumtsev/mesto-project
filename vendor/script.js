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
const editButton = document.querySelector('.button_type_edit');
const addButton = document.querySelector('.button_type_add');
const closeButton = document.querySelector('.button_type_close');
const profileNickname = document.querySelector('.profile__nickname');
const profileOccupation = document.querySelector('.profile__occupation');
const formEditProfile = document.querySelector('.form_type_edit-profile');
const inputNickname = document.querySelector('.form__input_type_nickname');
const inputOccupation = document.querySelector('.form__input_type_occupation');

const elementsGrid = document.querySelector('.elements__grid');
const cardTemplate = document.querySelector('#card-template').content;

function renderCard(card) {
    elementsGrid.append(card);
}

function buildCard(name, link) {
    const card = cardTemplate.querySelector('.elements__item').cloneNode(true);
    card.querySelector('.element__image').src = link;
    card.querySelector('.element__image').alt = name;
    card.querySelector('.element__caption').textContent = name;
    renderCard(card);
}

function arrHandler(arr) {
    for(let i = 0; i < arr.length; i++) {
        buildCard(arr[i].name, arr[i].link);
    }
}

arrHandler(initialCards);



function openPopup () {
    popup.classList.add('popup_is-open');
    inputNickname.value = profileNickname.textContent;
    inputOccupation.value = profileOccupation.textContent;
}

function closePopup () {
    popup.classList.remove('popup_is-open');
}

function saveData (evt) {
    evt.preventDefault();
    profileNickname.textContent = inputNickname.value;
    profileOccupation.textContent =  inputOccupation.value;
    closePopup();
}


editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formEditProfile.addEventListener('submit', saveData);