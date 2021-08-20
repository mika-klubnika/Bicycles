//МЕНЮ

const menu = document.querySelector('.navigation');
const button = document.querySelector('.navigation__toggle');

if (menu && button) {
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
}
