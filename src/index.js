import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






// Получаем все элементы с классом "position_priceBlock__16P3q"
const priceBlocks = document.querySelectorAll('.position_priceBlock__16P3q');
const costElement = document.querySelector('.order-float-button_orderFloatButton__1E-RQ');
const costElement2 = document.querySelector('.header_cartWrapper__1eKTd')
let totalPrice = 0; // хранилище общей суммы
                  //let totalQuantity = 0; // хранилище общего количества товаров переменная:(${totalQuantity})
// Для каждого блока цены выполняем действия
priceBlocks.forEach((priceBlock) => {

  // Получаем элементы внутри текущего блока
  const priceElement = priceBlock.querySelector('.position_price__17QNz');
  const addButton = priceBlock.querySelector('.quantity-button_quantityButton__1KTbZ:last-child');
  const subtractButton = priceBlock.querySelector('.quantity-button_quantityButton__1KTbZ:first-child');
  const quantityElement = priceBlock.querySelector('.position_quantity__ZG2rH');
  
  // Получаем изначальное значение цены и количества
  const priceValue = parseFloat(priceElement.innerText.replace(/[^\d.]/g, ''));
  const initialQuantityValue = parseInt(quantityElement.innerText);
  let quantityValue = initialQuantityValue;

  // Добавляем обработчик события при клике на кнопку добавления
  addButton.addEventListener('click', () => {
    quantityValue++; // Увеличиваем значение количества на 1
    quantityElement.innerText = quantityValue; // Обновляем значение количества на странице
    subtractButton.style.display = 'inline-block'; // Отображаем кнопку вычитания
    quantityElement.style.display = 'inline-block'; // Отображаем элемент с количеством
    //const totalPrice = priceValue * quantityValue; // Вычисляем общую стоимость

        totalPrice += priceValue;        // Обновляем общую сумму
    costElement.innerHTML = `Заказ / ${totalPrice.toLocaleString('ru-RU')} ₽`; // Обновляем значение общей стоимости на кнопке снизу
    costElement2.innerHTML = `Заказ / ${totalPrice.toLocaleString('ru-RU')} ₽`; //Обновляем значение общей стоимости на кнопке вверху
  });


  // Добавляем обработчик события при клике на кнопку вычитания
  subtractButton.addEventListener('click', () => {
    if (quantityValue > 0) {
      quantityValue--; // Уменьшаем значение количества на 1
      quantityElement.innerText = quantityValue; // Обновляем значение количества на странице
   
      totalPrice -= priceValue;   // Обновляем общую сумму
      costElement.innerHTML = `Заказ / ${totalPrice.toLocaleString('ru-RU')} ₽`; // Обновляем значение общей стоимости на кнопке внизу
      costElement2.innerHTML = `Заказ / ${totalPrice.toLocaleString('ru-RU')} ₽)`; //Обновляем значение общей стоимости на кнопке вверху
    }
    if (quantityValue <= 0) {
      subtractButton.style.display = 'none'; // Скрываем кнопку вычитания
      quantityElement.style.display = 'none'; // Скрываем элемент с количеством
    }
  });

  // Если начальное значение количества меньше или равно 1, скрываем кнопку вычитания и элемент с количеством
  if (quantityValue <= 1) {
    subtractButton.style.display = 'none';
    quantityElement.style.display = 'none';
  }
});



















             //Обводка ссылочных кнопок навигационной панели
/*const links = document.querySelectorAll('.filter-by-category_item__2BptE');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => {
            link.classList.remove('filter-by-category_selectedItem__120_e');
        });
        link.classList.add('filter-by-category_selectedItem__120_e');
    });
});   */          //Обводка ссылочных кнопок навигационной панели




// Получаем все элементы навигационной панели
const navLinks = document.querySelectorAll('.filter-by-category_item__2BptE');

// Создаем функцию для обработки клика на элементе
const handleClick = (event) => {
  // Отменяем стандартное поведение ссылки, чтобы страница не перезагружалась
  event.preventDefault();

  // Удаляем класс 'filter-by-category_selectedItem__120_e' у всех элементов навигационной панели
  navLinks.forEach((link) => {
    link.classList.remove('filter-by-category_selectedItem__120_e');
  });

  // Добавляем класс 'filter-by-category_selectedItem__120_e' к текущему элементу
  event.target.classList.add('filter-by-category_selectedItem__120_e');

  // Получаем элемент, на который ссылается текущая кнопка
  const target = document.querySelector(event.target.getAttribute('href'));

  // Прокручиваем страницу к выбранному разделу
  target.scrollIntoView({ behavior: 'smooth' });
};

// Добавляем обработчик события клика на каждый элемент навигационной панели
navLinks.forEach((link) => {
  link.addEventListener('click', handleClick);
});

// Добавляем обработчик события скролла на объект window
window.addEventListener('scroll', () => {
  // Получаем вертикальную позицию прокрутки страницы
  const scrollPosition = window.PageTransitionEvent || document.documentElement.scrollTop;

  // Перебираем все элементы навигационной панели
  navLinks.forEach((link) => {
    // Получаем позицию раздела, на который ведет ссылка
    const target = document.querySelector(link.getAttribute('href'));
    const topOffset = target.offsetTop;
    const bottomOffset = topOffset + target.offsetHeight;

    // Проверяем, находится ли позиция прокрутки страницы внутри раздела
    if (scrollPosition >= topOffset && scrollPosition < bottomOffset) {
      // Удаляем класс 'filter-by-category_selectedItem__120_e' у всех элементов навигационной панели
      navLinks.forEach((link) => {
        link.classList.remove('filter-by-category_selectedItem__120_e');
      });

      // Добавляем класс 'filter-by-category_selectedItem__120_e' к текущему элементу
      link.classList.add('filter-by-category_selectedItem__120_e');
    }
  });
});