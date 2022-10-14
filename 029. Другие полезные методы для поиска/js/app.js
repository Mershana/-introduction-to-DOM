'use strict'

// Другие полезные методы для поиска на JavaScript
// Получение по id
/* №1⊗jsPmDmOSM
Дан элемент #elem:
<div id="elem"></div>
Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст. */
/* let elem = document.getElementById('elem');
elem.textContent = 'text'; */

// Получение по имени тега
/* №2⊗jsPmDmOSM
Дан список:
<ul>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Получите все теги li по имени тега и сделайте их текст красного цвета. */
/* let elems = document.getElementsByTagName('li');
for (let elem of elems){
	elem.style.color = 'red';
} */

// Получение по имени класса
/* №3⊗jsPmDmOSM
Даны элементы:
<p class="www">elem 1</p>
<p class="www">elem 2</p>
<p class="www">elem 3</p>
Получите эти элементы по имени класса и сделайте их текст красного цвета. */
let elems = document.getElementsByClassName('www');
for (let elem of elems){
	elem.style.color = 'red';
}