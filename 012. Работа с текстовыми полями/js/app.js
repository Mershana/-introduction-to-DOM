'use strict'
// Работа с текстовыми полями в JavaScript

/* №1⊗jsPmDmTF
Дан инпут:
<input id="elem" value="text">
Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута. После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута, затем поредактируйте текст в инпуте и еще раз нажмите на кнопку. Убедитесь в том, что выведется новый текст инпута. */
/* let elem = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener('click', function(){
	console.log(elem.value);
}) */

/* №2⊗jsPmDmTF
Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст. */
/* let input = document.querySelector('#input');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	input.value = 'вы нажали кнопку и текст поменялся';
}) */

/* №3⊗jsPmDmTF
Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута. */
/* let input = document.querySelector('#input');
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	elem.textContent = input.value;
}) */

// №4⊗jsPmDmTF
// Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.
/* let number = document.querySelector('#number');
let square = document.querySelector('#square');
let button= document.querySelector('#button');
let sum = 0;

button.addEventListener('click', function(){
	square.value = number.value ** 2
}) */

/* №5⊗jsPmDmTF
Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов. */
/* let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let button = document.querySelector('#button');
let result;

button.addEventListener('click', function(){
	result = elem1.value;
	elem1.value = elem2.value;
	elem2.value = result;
}) */

/* №6⊗jsPmDmTF
Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац. */

/* let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let num4 = document.querySelector('#num4');
let num5 = document.querySelector('#num5');
let elem = document.querySelector('#elem1');
let button = document.querySelector('#button');
let sum;
let arr;
let split;

button.addEventListener('click', function(){
	sum = 0;
	arr = [num1.value, num2.value, num3.value, num4.value, num5.value];

	for (let i = 0; i < arr.length; i++){
		sum += + arr[i];
	}
	elem.textContent = sum / arr.length;
}) */