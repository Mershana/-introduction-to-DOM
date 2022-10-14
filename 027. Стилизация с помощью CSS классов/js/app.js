"use strict";

// Стилизация с помощью CSS классов на JavaScript
/* №2⊗jsPmDmCCS
Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например). */
/* let elem = document.querySelector('#elem');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');

button1.addEventListener('click', function(){
	elem.classList.add('pred');
});

button2.addEventListener('click', function(){
	elem.classList.add('pfatty');
});

button3.addEventListener('click', function(){
	elem.classList.add('pcrossed');
}); */

// Дополнительное преимущество
/* №3⊗jsPmDmCCS
Модифицируйте предыдущую задачу так, чтобы повторное нажатие на кнопку отменяло действие этой кнопки. */

let elem = document.querySelector("#elem");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");

button1.addEventListener("click", function () {
  /* if(elem == 'pred'){
	elem.classList.add('pred');
	} else {
		elem.classList.toggle('pred');
	} */
  elem.classList.toggle("pred");
});

button2.addEventListener("click", function () {
  elem.classList.toggle("pfatty");
});

button3.addEventListener("click", function () {
  elem.classList.toggle("pcrossed");
});
