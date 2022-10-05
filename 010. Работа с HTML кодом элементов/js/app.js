'use strict'

// Работа с HTML кодом элементов на JavaScript

/* №1⊗jsPmDmEH
Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль. */
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	console.log(elem.innerHTML);
}) */

// №2⊗jsPmDmEH
/* Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным. */
let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	// console.log(elem.innerHTML)
	/* elem.textContent = document.write('<b>' + 'аваыцвйуй' + '</b>'); */
	elem.innerHTML = '<b>dadadada</b>'
})

