const popup = document.querySelector('.popup');
const editButton = document.querySelector('.button_type_edit');
const addButton = document.querySelector('.button_type_add');
const closeButton = document.querySelector('.button_type_close');
const profileNickname = document.querySelector('.profile__nickname');
const profileOccupation = document.querySelector('.profile__occupation');
const formEditProfile = document.querySelector('.form_type_edit-profile');
const inputNickname = document.querySelector('.form__input_type_nickname');
const inputOccupation = document.querySelector('.form__input_type_occupation');

function openPopup () {
    popup.classList.add('popup_is-open');
    inputNickname.value = profileNickname.textContent;
    inputOccupation.value = profileOccupation.textContent;
}

function closePopup () {
    popup.classList.remove('popup_is-open');
}


editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);