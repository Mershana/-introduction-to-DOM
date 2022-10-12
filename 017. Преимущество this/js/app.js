'use strict'

// Преимущество this в JavaScript
/* №1⊗jsPmDmThsA
Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак. */
/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let elem4 = document.querySelector('#elem4');
let elem5 = document.querySelector('#elem5');

elem1.addEventListener('click', func);
elem2.addEventListener('click', func);
elem3.addEventListener('click', func);
elem4.addEventListener('click', func);
elem5.addEventListener('click', func);

function func(){
	console.log(this.textContent += '!');
} */

/* №2⊗jsPmDmThsA
Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат. */
/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

elem1.addEventListener('blur', func);
elem2.addEventListener('blur', func);
elem3.addEventListener('blur', func);

function func(){
	console.log(this.value ** 2)
} */