const popup = document.querySelector('.popup');
const editButton = document.querySelector('.button_type_edit');
const addButton = document.querySelector('.button_type_add');

editButton.addEventListener('click', function () {
    popup.classList.add('popup_is-open');
});