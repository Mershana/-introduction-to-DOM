'use strict'

/* №1⊗jsPmDmEA
Дан див:
<div id="elem" class="content no-gap"></div>
Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива. */
// Исключения при работе с атрибутами в JavaScript
/* let elem = document.querySelector('#elem');
console.log(elem.className);
 */

/* №2⊗jsPmDmEA
Дан див:
<div id="elem"></div>
Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс. */
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	console.log(elem.className = 'add class');
}); */

/* №3⊗jsPmDmEA
Дан див с несколькими CSS классами, записанными через пробел:
<div id="elem" class="aaa bbb ccc"></div>
Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива */
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
let arr = [];

button.addEventListener('click', function(){
arr.push = elem.className;
console.log(arr);
}) */