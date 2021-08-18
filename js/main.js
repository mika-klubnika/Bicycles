//МЕНЮ

const menu = document.querySelector('.navigation');
const button = document.querySelector('.navigation__toggle');

menu.classList.remove('navigation--nojs');

button.addEventListener('click', () => {
  menu.classList.toggle("navigation--close")
  menu.classList.toggle("navigation--open")

  if (menu.classList.contains("navigation--close")) {
    button.setAttribute("aria-label", "Открыть меню");
  } else {
    button.setAttribute("aria-label", "Закрыть меню");
  }
});

//ФОРМА
const form = document.querySelector('.form');
const userName = form.querySelector('input[name="userName"]');
const userPhone = form.querySelector('input[name="tel"]');

const getCorrectName = () => {
  return (evt) => {
    const valueName = userName.value;
    const check = /^[a-zA-Zа-яА-Я]*$/;

    for (let i = 0; i < valueName.length; i++) {
      !check.test(valueName[i]) ? userName.setCustomValidity('Имя должно состоять только букв') : userName.setCustomValidity('');
    }
  }
};

userName.addEventListener('input', getCorrectName());

const getCorrectPhone = () => {
  return (evt) => {
    const valuePhone = userPhone.value;
    const check = /^[0-9]*$/;

    for (let i = 0; i < valuePhone.length; i++) {
      !check.test(valuePhone[i]) ? userPhone.setCustomValidity('Номер телефона должен состоять из цифр') : userPhone.setCustomValidity('');
    }
  }
}

userPhone.addEventListener('input', getCorrectPhone());
