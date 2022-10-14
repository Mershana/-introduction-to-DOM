'use strict'

// Пользовательские атрибуты в JavaScript
/* №1⊗jsPmDmDA
Дан следующий код:
<div id="elem" data-text="str">text</div>
Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text. */
/* let elem = document.querySelector('#elem');
elem.addEventListener('click', function(){
	(elem.textContent += elem.dataset.text);
}); */

/* №2⊗jsPmDmDA
Даны дивы, содержащие в атрибуте data-num свой порядковый номер:
<div data-num="1">text</div>
<div data-num="2">text</div>
<div data-num="3">text</div>
<div data-num="4">text</div>
<div data-num="5">text</div>
Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер. */

/* №2⊗jsPmDmDA
Даны дивы, содержащие в атрибуте data-num свой порядковый номер:
<div data-num="1">text</div>
<div data-num="2">text</div>
<div data-num="3">text</div>
<div data-num="4">text</div>
<div data-num="5">text</div>
Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер. */
/* let elems = document.querySelectorAll('div');
for (let elem of elems){
	elem.addEventListener('click', function(){
		elem.textContent += elem.dataset.num;
	});
} */

/* №3⊗jsPmDmDA
Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по двойному клику на эту кнопку на экран выводится, сколько кликов по этой кнопке было сделано. */
/* let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function(){
		elem.textContent++;
});

button.addEventListener('dblclick', function(){
	elem.textContent = ' ваши клики: ' + elem.textContent++ 
});
 */




/* №4⊗jsPmDmDA
Дан инпут:
<input id="elem" data-length="5">
В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом. */
/* let elem = document.querySelector('#elem');
elem.addEventListener('blur', function(){
	if (this.getAttribute('data-length') > this.value.length){
		alert('Вы ввели меньше 5 символов');
	} else if (this.getAttribute('data-length') == this.value.length){
		alert('Введенные символы совпадают');
	} else {
		alert('Вы ввели больше 5 символов');
	}
}); */
//dataset
/* let elem = document.querySelector('#elem');
elem.addEventListener('blur', function(){
	if (this.dataset.length > this.value.length){
		alert('Вы ввели меньше 5 символов');
	} else if (this.dataset.length == this.value.length){
		alert('Введенные символы совпадают');
	} else {
		alert('Вы ввели больше 5 символов');
	}
}); */

/* №5⊗jsPmDmDA
Дан инпут:
<input id="elem" data-min="5" data-max="10">
В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом. */
/* let elem = document.querySelector('#elem');
elem.addEventListener('blur', function(){
	if (this.dataset.min <= this.value.length && this.dataset.max >= this.value.length){
		alert('Вы уложились в диапазон');
	} else {
		alert('Вы не уложились в диапазон');
	}
}); */

// Имена с дефисами
/* №6⊗jsPmDmDA
Дан следующий код:
<div id="elem" data-product-price="1000" data-product-amount="5">
	товар яблоки - 2424242
</div>
Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество. */
/* let elem = document.querySelector('#elem');
elem.addEventListener('click', function(){
	elem.textContent += 'цена яблок:' + elem.dataset.productPrice * elem.dataset.productAmount;
}); */

// Обращение через методы
/* №7⊗jsPmDmDA
Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute. */
/* let elems = document.querySelectorAll('p');
for (let i = 0; i < elems.length; i++){
	elems[i].addEventListener('click', function(){
		(elems[i].setAttribute('data-num', i));
		console.log(elems[i])
	});
} */

