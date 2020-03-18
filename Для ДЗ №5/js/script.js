document.body.style.backgroundImage = "url(img/apple_true.jpg)";

let menu = document.querySelector('.menu');
  let menuItems = document.querySelectorAll('.menu-item');
    menuItems[1].style.background = 'red';
    menuItems[2].style.background = 'green';
    menu.insertBefore(menuItems[2], menuItems[1]);

let menu5 = document.createElement('li');
  menu5.classList.add('menu-item');
  menu.appendChild(menu5);
  menu5.innerHTML = "Пятый пункт";

let adv = document.querySelector('.adv');
  adv.style.background = 'yellow';
let column = document.querySelectorAll('.column');
  column[1].removeChild(adv);

let title = document.querySelector('.title');
  title.innerHTML = "Мы продаем только подлинную технику Apple";

let review = document.querySelector('.prompt');
  review.textContent = (prompt("как вы относитесь к технике Apple?"));



