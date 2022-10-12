'use strict'

// Объект this в JavaScript
/* №1⊗jsPmDmThs
Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this. */
/* let elem = document.querySelector('#elem');
elem.addEventListener('focus', function(){
	this.value = 1;
	elem.addEventListener('blur', function(){
		this.value = 2;
	})
}) */

/* №2⊗jsPmDmThs
Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. */
/* let button = (document.querySelector('#button'));
button.addEventListener('click', function(){
	this.value = +button.value + 1;
}) */