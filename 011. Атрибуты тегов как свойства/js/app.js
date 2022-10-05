'use strict'

/* №1⊗jsPmDmAVP
Дан следующий инпут:
<input id="elem" type="email">
Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута. */
/* let elem = document.querySelector('#elem');
console.log(elem.type); */

/* №2⊗jsPmDmAVP
Дан следующий инпут:
<input id="elem" type="email">
Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit. */
/* let elem = document.querySelector('#elem');
elem.type = 'submit';
console.log(elem.type); */

/* №3⊗jsPmDmAVP
Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки. */
/* let elem = document.querySelector('#elem');
let link = document.querySelector('#link');
let button = document.querySelector('#button'); */

/* button.addEventListener('click', function(){
	elem.textContent = link.href;
	console.log(elem.textContent)
}) */

/* №4⊗jsPmDmAVP
Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках. */
/* let link = document.querySelector('#link');
let button = document.querySelector('#button'); 
let elem = document.querySelector('#elem');

button.addEventListener('click', function(){
	elem.innerHTML = '(' + link.href + ')';
}) */

/* №5⊗jsPmDmAVP
Пусть у вас есть картинка. Разместите ее на странице в помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src. */
/* let photo = document.querySelector('#photo');
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');

button.addEventListener('click', function(){
	elem.innerHTML = '(' + photo.src + ')';
}) */

/* №6⊗jsPmDmAVP
Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300. */
/* let photo = document.querySelector('#photo');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	photo.width = 300;
}) */

/* №7⊗jsPmDmAVP
Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза. */

/* let photo = document.querySelector('#photo');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	photo.width *= 2;
}) */

/* №8⊗jsPmDmAVP
Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке. */

let photo = document.querySelector('#photo');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button1.addEventListener('click', function(){
	photo.src = 'https://www.korabli.eu/users/andrey/images/unnamed-gallery-1/full/ryshei084jpg.jpg';
})

button2.addEventListener('click', function(){
	photo.src = 'https://www.korabli.eu/users/andrey/images/unnamed-gallery-1/full/010174jpg.jpg';
})