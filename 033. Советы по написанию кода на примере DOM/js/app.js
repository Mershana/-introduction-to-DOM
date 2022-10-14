'use strict'

// Советы по написанию кода на примере DOM в JavaScript
/* №1⊗jsPmDmCdg
Дан список с годами:
<ul>
	<li>2000</li>
	<li>2004</li>
	<li>2021</li>
	<li>2022</li>
	<li>2025</li>
	<li>2031</li>
</ul>
Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов. */
/* let elems = document.querySelectorAll('li');
let sum = 0;
for (let elem of elems){
	let text = String(elem.textContent)

	if (+text[0] + +text[1] + +text[2] + +text[3] === 6){
		sum += +text;
	}
}
console.log(sum);  *///6057