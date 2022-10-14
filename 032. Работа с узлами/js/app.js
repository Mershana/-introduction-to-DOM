'use strict'

// Работа с узлами в JavaScript
/* // №1⊗jsPmDmNds
Напишите код, который покажет разницу между lastChild и lastElementChild. */
/* let elem = document.querySelector('#elem');
console.log(elem.lastChild);
console.log(elem.lastElementChild); */

/* №2⊗jsPmDmNds
Напишите код, который покажет разницу между nextSibling и nextElementSibling. */
/* let elem = document.querySelector('#elem');
console.log(elem.nextSibling);
console.log(elem.nextElementSibling);  */

/* №3⊗jsPmDmNds
Напишите код, который покажет разницу между previousSibling и previousElementSibling. */
/* let elem = document.querySelector('#elem');
console.log(elem.previousSibling);
console.log(elem.nextElementSibling);  */

// Перебор циклом
/* №4⊗jsPmDmNds
Дан див:
<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите их в консоль. */
/* let elem = document.querySelector('#elem');
for (let node of elem.childNodes){
	console.log(node);
} */

// Название узлов
/* №5⊗jsPmDmNds
Дан див:
<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль их названия. */
/* let elem = document.querySelector('#elem');
for (let node of elem.nodeName){
	console.log(node);
} */

// Тип узлов
/* №6⊗jsPmDmNds
Дан див:
<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль только узлы-элементы и текстовые узлы. */
/* let elem = document.querySelector('#elem');
for (let node of elem.childNodes){
	if(node.nodeType === node.TEXT_NODE){
		console.log(node);
	} else if (node.nodeType === node.ELEMENT_NODE){
			console.log(node);
	} 
} */

// Текст узлов
/* №7⊗jsPmDmNds
Дан див:
<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль тексты всех узлов. */
/* let elem = document.querySelector('#elem');
for (let node of elem.childNodes){
	console.log(node.textContent);
} */

/* №8⊗jsPmDmNds
Дан див:
<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль тексты всех комментариев и текстовых узлов. */
/* let elem = document.querySelector('#elem');
for (let node of elem.childNodes){
	if(node.nodeType === node.TEXT_NODE){
		console.log(node.textContent);
	} else if (node.nodeType === node.COMMENT_NODE){
			console.log(node.textContent);
	} 
} */

/* №9⊗jsPmDmNds
Дан див:
<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль тексты текстовых узлов и элементов. */
/* let elem = document.querySelector('#elem');
for (let node of elem.childNodes){
	if(node.nodeType === node.TEXT_NODE){
		console.log(node.textContent);
	} else if (node.nodeType === node.ELEMENT_NODE){
			console.log(node.textContent);
	} 
} */

/* №10⊗jsPmDmNds
Дан див:
<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и каждому узлу в конец запишите его тип. */
/* let elem = document.querySelector('#elem');
for (let node of elem.childNodes){
	elem.innerHTML += node.textContent;
} */
