'use strict'

// Стилизация элементов через атрибут style в JavaScript
/* №1⊗jsPmDmASS
Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу. */
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	elem.style.height = '100px';
	elem.style.width = '100px';
	elem.style.border = 'solid 1px #000';
}) */

// Свойства с дефисом

/* №2⊗jsPmDmASS
Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон. */
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	elem.style.fontSize = '20px';
	elem.style.paddingTop = '10px';
	elem.style.backgroundColor = 'red';
	elem.style.border = 'solid 1px #000';
 })
 */

/*  Исключение
 Свойство float является исключением, так как оно является специальным в JavaScript. Для него следует писать cssFloat:
 elem.style.cssFloat = 'right'; */

/*  №3⊗jsPmDmASS
Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left. */
/* let button = document.querySelector('#button');
let elems = document.querySelectorAll('li');
for (let elem of elems){
	button.addEventListener('click', function func() {
		(elem.style.cssFloat = 'left');
	});
} */