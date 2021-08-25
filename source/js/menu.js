//МЕНЮ

const menu = document.querySelector('.navigation');
const button = menu.querySelector('.navigation__toggle');
const links = menu.querySelectorAll('.navigation__item');

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

  links.forEach(link => {
    link.addEventListener("click",evt => {
      menu.classList.add("navigation--close")
      menu.classList.remove("navigation--open")
    })
  });
}
