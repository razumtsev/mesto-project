const popup = document.querySelector('.popup');
const editButton = document.querySelector('.button_type_edit');
const addButton = document.querySelector('.button_type_add');
const closeButton = document.querySelector('.button_type_close');

function openPopup () {
    popup.classList.add('popup_is-open');
}

function closePopup () {
    popup.classList.remove('popup_is-open');
}


editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);