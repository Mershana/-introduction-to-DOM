'use strict'

// Манипулирование CSS классами в JavaScript
// Массив классов

/* №1⊗jsPmDmCCM
Дан элемент:
<p id="elem" class="www ggg zzz"></p>
Узнайте количество его классов. */

/* let elem = document.querySelector('#elem');
let length = elem.classList.length;
console.log(length); */ //3

/* №2⊗jsPmDmCCM
Дан элемент:
<p id="elem" class="www ggg zzz"></p>
Переберите в цикле его классы. */
/* let elem = document.querySelector('#elem');
let classNames = elem.classList;

for (let className of classNames){
	document.write(className + '<br>');
} */

// Добавление классов
/* №3⊗jsPmDmCCM
Дан элемент:
<p id="elem" class="www ggg zzz"></p>
Добавьте ему класс xxx. */
/* let elem = document.querySelector('#elem');
elem.classList.add('xxx');
let className = document.querySelector('.xxx');
console.log(className); */

// Удаление классов
/* №4⊗jsPmDmCCM
Дан элемент:
<p id="elem" class="www ggg zzz"></p>
Удалите у него класс www и класс zzz. */
/* let elem = document.querySelector('#elem');
elem.classList.remove('www', 'zzz');
let className = document.querySelector('.ggg');
console.log(className); */

// Проверка классов
/* №5⊗jsPmDmCCM
Дан элемент:
<p id="elem" class="www ggg zzz"></p>
Проверьте наличие у него класса ggg. */
/* let elem = document.querySelector('#elem');
let contains = elem.classList.contains('ggg');
console.log(contains); */ //true

// Чередование классов
/* №6⊗jsPmDmCCM
Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть. */
/* let elem = document.querySelector('#elem');
elem.classList.toggle('hhh');
elem.classList.toggle('rrr');
let className = document.querySelector('.rrr');
console.log(className); */