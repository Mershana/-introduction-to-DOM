'use strict'
// Нахождение элементов по родственным связям в JavaScript

/* №1⊗jsPmDmPRS
Дан элемент #elem:
<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите первого потомка этого элемента и сделайте его текст красного цвета. */
/* let elem = document.querySelector('#elem');
let text = elem.firstElementChild;

text.addEventListener('click', function(){
	text.style.color = 'red';
}); */

/* №2⊗jsPmDmPRS
Дан элемент #elem:
<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите последнего потомка этого элемента и сделайте его текст красного цвета. */
/* let elem = document.querySelector('#elem');
let text = elem.lastElementChild;
text.addEventListener('click', function(){
	text.style.color = 'red';
}); */


/* №3⊗jsPmDmPRS
Дан элемент #elem:
<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите всех потомков этого элемента и добавьте им в конец текст '!'. */
/* let elem = document.querySelector('#elem');
let elems = elem.children;
for (let elem of elems){
	elem.textContent += '!';
}
 */

/* // Родители элементов
№4⊗jsPmDmPRS
Дан элемент #elem:
<div>
	<ul>
		<li>text</li>
		<li>text</li>
		<li id="elem">text</li>
		<li>text</li>
		<li>text</li>
	</ul>
</div>
Найдите его родителя и задайте ему красную границу. */
/* let elem = document.querySelector('#elem');
let id = elem.parentElement.style.border = 'solid 1px red'; */

/* №5⊗jsPmDmPRS
Дан элемент #elem:

<div>
	<ul>
		<li>text</li>
		<li>text</li>
		<li id="elem">text</li>
		<li>text</li>
		<li>text</li>
	</ul>
</div>
Найдите его родителя родителя и задайте ему красную границу. */
/* let elem = document.querySelector('#elem');
let id = elem.parentElement;
let elems = id.parentElement.style.border = 'solid 1px red'; */

// Поиск всех родителей
/* №6⊗jsPmDmPRS
Дан элемент:
<header>
	<div>
		<p>
			<span id="elem"></span>
		</p>
	</div>
</header>
Найдите ближайшего родителя этого элемента, являющегося тегом div. */
/* let elem = document.querySelector('#elem');
let parent = elem.closest('div');
console.log(parent); */

/* №7⊗jsPmDmPRS
Дан элемент:
<header>
	<div class="www">
		<p class="www">
			<span id="elem"></span>
		</p>
	</div>
</header>
Найдите ближайшего родителя этого элемента, являющегося элементом с классом www. */ 
/* let elem = document.querySelector('#elem');
let parent = elem.closest('.www');
console.log(parent);  */

// Поиск соседей
/* №8⊗jsPmDmPRS
Дан элемент #elem:
<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите его соседа сверху и добавьте ему в конец текст '!'. */
/* let elem = document.querySelector('#elem');
let text = elem.previousElementSibling.textContent += '!'; */

/* №9⊗jsPmDmPRS
Дан элемент #elem:
<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите его соседа снизу и добавьте ему в конец текст '!'. */
/* let elem = document.querySelector('#elem');
let text = elem.nextElementSibling.textContent += '!'; */

/* №10⊗jsPmDmPRS
Дан элемент #elem:
<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'. */
/* let elem = document.querySelector('#elem');
let text = elem.nextElementSibling;
let elems = text.nextElementSibling.textContent += '!'; */

/* №11⊗jsPmDmPRS
Дан элемент #elem:
<ul>
	<li>text1</li>
	<li>text2</li>
	<li id="elem">text3</li>
	<li>text4</li>
	<li>text5</li>
</ul>
Поменяйте местами текст его соседа сверху и текст его соседа снизу. */
/* let elem = document.querySelector('#elem');
let text = elem.previousElementSibling.innerHTML = 'text4';
let elems = elem.nextElementSibling.innerHTML = 'text2'; */