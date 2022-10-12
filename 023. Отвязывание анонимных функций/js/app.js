'use strict'
// Отвязывание анонимных функций в JavaScript
/* №1⊗jsPmDmAHU
Дан список ul, в каждом пункте которого записано число. Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу. */

/* let elems = document.querySelectorAll('li');
for (let elem of elems){
	elem.addEventListener('click', function func() {
		(this.textContent++);
	});
} */

/* №2⊗jsPmDmAHU
Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только по первому нажатию на нее. */
/* let elems = document.querySelectorAll('li');
for (let elem of elems){
	elem.addEventListener('click', function func() {
		(this.textContent++);
		this.removeEventListener('click', func);
	});
}  */

/* №3⊗jsPmDmAHU
Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только если ее значение меньше 10. */
let elems = document.querySelectorAll('li');
for (let elem of elems){
	elem.addEventListener('click', function func() {
		if (this.textContent < 10){
			(this.textContent++);
		} else if (elem >= 10){
			this.removeEventListener('click', func);
		}
	});
}

