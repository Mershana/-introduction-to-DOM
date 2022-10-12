'use strict'

// Получение группы элементов в JavaScript
/* №1⊗jsPmDmEGG
Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом и установите текст каждого абзаца в значение 'text'. */
/* let elems = document.querySelectorAll('#elems');
let button = document.querySelector('#button');

button.addEventListener('click', func);

function func(){
	for (let elem of elems){
		elem.textContent = elem.textContent + 'text';
	}
}
 */


/* №2⊗jsPmDmEGG
Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер. */
/* let elems = document.querySelectorAll('#elems');
let button = document.querySelector('#button');

button.addEventListener('click', func);

function func(){
	for (let i = 0; i < elems.length; i++){
		elems[i].innerHTML = elems[i].innerHTML + (i + 1);
	}
} */

/* №3⊗jsPmDmEGG
Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца. */
/* let elem = document.querySelectorAll('.elem');
let button = document.querySelector('#button');
let result = document.querySelector('#result');
let sum = 0;

button.addEventListener('click', func);


function func(){
	for (let i = 0; i < elem.length; i++){
		sum =  sum + Number(elem[i].value);
	}
	return result.textContent = sum;
}
 */
