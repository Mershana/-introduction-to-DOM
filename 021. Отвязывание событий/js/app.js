'use strict'

// Отвязывание событий в JavaScript
/* №1⊗jsPmDmHU
Дана ссылка. По нажатию на эту ссылку добавьте в конец ее текста содержимое ее атрибута href в круглых скобках. Сделайте так, чтобы это добавление происходило лишь по первому нажатию. */

/* let link = document.querySelector('#link');
link.addEventListener('click', func);

function func(){
	this.innerHTML = this.innerHTML + '(' + this.href + ' )';
	this.removeEventListener('click', func);	 
} */



/* №2⊗jsPmDmHU
Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие. */
/* let button = document.querySelector('#button');
button.addEventListener('click', func);

function func(){
	if (this.value < 10){
		this.value++;
		} else if(this.value === 10) {
			this.removeEventListener('click', func);
		}
} */