'use strict'

// Обработчики разных событий в JavaScript
/* Кроме клика по элементу, существуют и другие события. Например, с помощью события dblclick можно отловить двойной клик по элементу, с помощью события mouseover - наведение курсора на элемент, а с помощью события mouseout - уход курсора с элемента. */



/* №1⊗jsPmDmDEH
Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение. */
/* let button = document.querySelector('#button');
button.addEventListener('dblclick', function(){
	console.log('это даблклик');
}) */

/* №2⊗jsPmDmDEH
Дана кнопка. По наведению на нее выведите какое-нибудь сообщение. */
/* button.addEventListener('mouseover', function(){
	console.log('это наведение курсора');
}) */

/* №3⊗jsPmDmDEH
Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение. */
/* button.addEventListener('mouseout', function(){
	console.log('это уход курсора с элемента');
}) */

/* 
№4⊗jsPmDmDEH
Дана кнопка. По наведению на нее выведите одно сообщение, а по уходу с нее - другое. */
let button = document.querySelector('#button');
button.addEventListener('mouseover', function(){
	console.log('наведение курсора на элемент');
})

button.addEventListener('mouseout', function(){
	console.log('ухода курсора с элемента');
})
