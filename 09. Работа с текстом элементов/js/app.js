"use strict";

// Работа с текстом элементов на JavaScript
/* №1⊗jsPmDmET
Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль. */
/* let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener('click', function(){
	console.log(elem.textContent);
}) */

/* №2⊗jsPmDmET
Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст. */
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	elem.textContent = 'текст перезаписан';
	console.log(elem.textContent);
}) */

/* №3⊗jsPmDmET
Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел. */
/* let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let sum = 0;
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	let sum = Number(num1.textContent) + Number(num2.textContent)
	console.log(sum);
}) */

/* №4⊗jsPmDmET
Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел. */
/* let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');

let result = document.querySelector('#result');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	result.textContent = Number(num1.textContent) + Number(num2.textContent) + Number(num3.textContent);
}) */

/* №5⊗jsPmDmET
Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно. */
/* let num1 = document.querySelector('#num1');
let button = document.querySelector('#button');
let sum = 0;

button.addEventListener('click', function(){
	sum = (+num1.textContent + 1)
	console.log(num1.textContent = sum);
}) */

/* №6⊗jsPmDmET
Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак. */
let str = document.querySelector('#str');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	str.textContent = str.textContent + '!';
})