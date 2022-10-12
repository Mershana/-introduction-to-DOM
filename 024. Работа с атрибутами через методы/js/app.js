'use strict'

// Работа с атрибутами через методы в JavaScript
/* №1⊗jsPmDmAVM
Дан элемент:
<input id="elem" value="text">
Получите значение его атрибута value. */
/* let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');
console.log(value); */

/* №2⊗jsPmDmAVM
Дан элемент:
<input id="elem" class="www zzz">
Получите значение его атрибута class. */
/* let elem = document.querySelector('#elem');
let content = elem.getAttribute('class');
console.log(content); */

// Установка
/* №3⊗jsPmDmAVM
Дан элемент:
<input id="elem">
Установите его атрибут value в значение 'text'. */
/* let elem = document.querySelector('#elem');
elem.setAttribute('value', 'text'); */

/* №4⊗jsPmDmAVM
Дан элемент:
<input id="elem">
Установите ему атрибут class в значение 'valid'. */
/* let elem = document.querySelector('#elem');
elem.setAttribute('class', 'valid');
let content = document.querySelector('.valid');
console.log(content); */


/* №5⊗jsPmDmAVM
Дан элемент:
<input id="elem" value="text">
Удалите у него атрибут value. */
/* let elem = document.querySelector('#elem');
elem.removeAttribute('value');
console.log(elem); */

/* №6⊗jsPmDmAVM
Дан элемент:
<input id="elem" value="text">
Проверьте наличие у него атрибута value. */
let elem = document.querySelector('#elem');
console.log(elem.hasAttribute('value'));
