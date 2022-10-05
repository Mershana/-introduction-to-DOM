'use strict'

/* №1⊗jsPmDmTFF
Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2. */
/* let elem = document.querySelector('#elem');
elem.addEventListener('focus', function(){
	elem.value = 1;
	elem.addEventListener('blur', function(){
		elem.value = 2;
	})
}) */

/* №2⊗jsPmDmTFF
Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа. */
/* let elem = document.querySelector('#elem');
let result = document.querySelector('#result');
	elem.addEventListener('blur', function(){
		result.textContent = elem.value ** 2
	}); */


/* №3⊗jsPmDmTFF
Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута. */
let elem = document.querySelector('#elem');
elem.addEventListener('focus', function(){
	elem.value = '';
})