'use strict'

// Добавление обработчиков в цикле в JavaScript

/* №1⊗jsPmDmLNH
Дана следующая функция:
function func() {
	this.value = Number(this.value) + 1;
}
Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция. */
/* let inpt = document.querySelectorAll('input');
for (let elem of inpt){
	elem.addEventListener('blur', func);
}

function func() {
	this.value = Number(this.value) + 1;
} */

/* №2⊗jsPmDmLNH
Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат */
let elems = document.querySelectorAll('p');
for (let elem of elems){
	elem.addEventListener('click', func);
}	

function func(){
	this.textContent = this.textContent ** 2;
}