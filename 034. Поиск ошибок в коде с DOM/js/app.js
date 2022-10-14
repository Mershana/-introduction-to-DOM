"use strict";

// Поиск ошибок в коде с DOM в JavaScript
/* №1⊗jsPmDmMst
Код должен добавить текст в конец каждого абзаца:
<p>1</p>
<p>2</p>
<p>3</p>
let elems = document.querySelector('p');
elems.textContent += '!'; */
//==========

/* let elems = document.querySelectorAll('p');
for (let elem of elems){
	elem.textContent += '!'; 
} */

/* №2⊗jsPmDmMst
По клику на абзац его значение должно увеличиться на единицу:
<p>1</p>
<p>2</p>
<p>3</p>
let elems = document.querySelectorAll('p');
for (let elem of elems) {
	elem.addEventListener('click', function() {
		this.textContent += Number(1);
	});
} */
//===========

/* let elems = document.querySelectorAll('p');
for (let elem of elems) {
	elem.addEventListener('click', function() {
	this.textContent = +elem.textContent + 1;
	});
}  */

/* №3⊗jsPmDmMst
По клику на кнопку текст абзаца должен стать жирным:
<p>text</p>
<button>click</button>
let button = document.querySelector('button');
let elem   = document.querySelector('p');

button.addEventListener('click', function() {
	elem.innerHTML = '<b>elem.innerHTML</b>';
}); */

//============
/* let button = document.querySelector('button');
let elem   = document.querySelector('p');

button.addEventListener('click', function() {
	elem.innerHTML = '<b>' + elem.textContent + '</b>';
});  */

/* №4⊗jsPmDmMst
По клику на кнопку должна вывестись сумма чисел из абзацев:
<p>1</p>
<p>2</p>
<p>3</p>
<button>click</button>
let button = document.querySelector('button');
let elems  = document.querySelector('p');

button.addEventListener('click', function() {
	let sum = 0;
	
	for (let elem of elems) {
		sum += Number(elems.textContent);
	}
	
	console.log(sum);
}); */

//===============
/* let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');

button.addEventListener('click', function() {
	let sum = 0;
	
	for (let elem of elems) {
		sum += Number(elem.textContent);
	}
	
	console.log(sum);
});  */

/* №5⊗jsPmDmMst
По клику на абзац ему в конец должен добавиться заданный текст:
<p>1</p>
<p>2</p>
<p>3</p>
let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', () => {
		this.textContent += '!';
	});
} */

//=================
/* let elems = document.querySelectorAll('p');
for (let elem of elems) {
	elem.addEventListener('click', () => {
		elem.textContent += '!';
	});
}  */

/* №6⊗jsPmDmMst
По клику на кнопку текст каждого абзаца должен стать жирным:
<p>text1</p>
<p>text2</p>
<p>text3</p>
<button>click</button>
let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');

button.addEventListener('click', function() {
	for (let elem of elems) {
		elem.innerHTML = '<b>+elem.innerHTML+</b>';
	}
}); */

/////////////////////////
/* let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');
button.addEventListener('click', function() {
	for (let elem of elems) {
		elem.innerHTML = '<b>' + elem.textContent + '</b>';
	}
});  */

/* №7⊗jsPmDmMst
По клику на кнопку в консоль должна вывестись сумма чисел из абзацев:
<p>1</p>
<p>2</p>
<p>3</p>
<button>click</button>
let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');
let sum = 0;

for (let elem of elems) {
	sum = elem.textContent + 1;
	
	button.addEventListener('click', function() {
		console.log(sum);
	});
} */

///////////////////////////////
/* let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');
let sum = 0;

button.addEventListener('click', func)

function func(){
	for (let elem of elems){
		sum += +elem.textContent;
	}
	console.log(sum)
} */

/* №8⊗jsPmDmMst
В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма чисел из инпутов:
<input>
<input>
<input>

<button>click</button>
let button = document.querySelector('button');
let elems  = document.querySelectorAll('input');
let sum = 0;

for (let elem of elems) {
	sum += elem.value;
}

button.addEventListener('click', function() {
	console.log(sum);
}); */

/* let button = document.querySelector("button");
let elems = document.querySelectorAll("input");
let sum = 0;

button.addEventListener("click", func);

function func(){
	for (let elem of elems){
	sum += Number(elem.value);
	}
	console.log(sum);
} */

/* №9⊗jsPmDmMst
В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:
<input id="inp1">
<input id="inp2">
<input id="inp3">
<button id="btn">click</button>
let btn  = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');

btn.addEventListener('click', function() {
	inp3.textContent = inp1.textContent + inp2.textContent;
}); */

///////////////////////////////
/* let btn  = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');

btn.addEventListener('click', function() {
	console.log(inp3.value = Number(inp1.value) + Number(inp2.value));
});  */

/* 
№10⊗jsPmDmMst
В первые два инпута вводятся числа. По клику на кнопку в абзац должна вывестись сумма этих чисел:
<input id="inp1">
<input id="inp2">
<p id="res"></p>
<button id="btn">click</button>
let btn  = document.querySelector('btn');
let res  = document.querySelector('res');
let inp1 = document.querySelector('inp1');
let inp2 = document.querySelector('inp2');

button.addEventListener('click', function() {
	res.value = inp1.value + inp2.value;
}); */
///////////////////////
/* let btn  = document.querySelector('#btn');
let res  = document.querySelector('#res');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');

btn.addEventListener('click', function() {
	res.textContent = +inp1.value + +inp2.value;
});
 */

/* №11⊗jsPmDmMst
По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом его data атрибута:
<input data-text="text1">
<input data-text="text2">
<input data-text="text3">

<button id="btn">click</button>
let inputs = document.querySelectorAll('input');
let button = document.querySelector('#button');

button.addEventListener('click',function() {
	for (let input of inputs) {
		if (input.value === input.dataset) {
			input.classList.add('right')
		} else {
			input.classList.add('wrong')
		}
	}
}); */
////////////////////
/* let inputs = document.querySelectorAll('input');
let button = document.querySelector('#btn');

button.addEventListener('click', function() {
	for (let input of inputs) {
		if (input.value == input.dataset.text) {
			console.log('right');
		} else {
			console.log('wrong');
		}
	}
}); */

/* №12⊗jsPmDmMst
По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом соответствующего элемента массива:
<input>
<input>
<input>
<button id="btn">click</button>
let inputs = document.querySelectorAll('input')
let button = document.querySelector('#button')

let texts = [
	'text1',
	'text2',
	'text3',
];

button.addEventListener('click',function() {
	for (let input of inputs) {
		for (let text of texts) {
			if (input.value === text) {
				input.classList.add('right')
			} else {
				input.classList.add('wrong')
			}
		}
	}
}); */

/* let inputs = document.querySelectorAll('input')
let button = document.querySelector('#btn')

let texts = [
	'text1',
	'text2',
	'text3',
];

button.addEventListener('click',function() {
	for (let input of inputs) {
		for (let text of texts) {
			if (input.value === text) {
				console.log('right');
			} else {
				console.log('wrong');
			}
		}
	}
}); */

/* №13⊗jsPmDmMst
В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма введенных чисел:
<input>
<input>
<input>

<button id="btn">click</button>
let inputs = document.querySelectorAll('inputs');
let btn = document.querySelector('#btm');
let sum = 0;

btn.addEventListener('click', function() {
	for (let input of inputs) {
		sum += Number(input);
	}
	
	console.log(sum);
}); */
/////////////////////////////
/* let inputs = document.querySelectorAll('input');
let btn = document.querySelector('#btn');
let sum = 0;

btn.addEventListener('click', function() {
	for (let input of inputs) {
		sum += Number(input.value);
	}
	
	console.log(sum);
}); */

/* №14⊗jsPmDmMst
В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:
<input id="inp1">
<input id="inp2">
<input id="inp3">
<button id="btn">click</button>
let btn  = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');

let sum  = inp1.value + inp2.value;

btn.addEventListener('click', function() {
	inp3.value = sum;
}); */
/////////////////////////
/* let btn = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');


btn.addEventListener('click', function() {
	let sum = Number(inp1.value) + Number(inp2.value); 
	inp3.value = sum;
});  */

/* №15⊗jsPmDmMst
В инпут вводится число. По потери фокуса в консоль должна вывестись сумма цифр этого числа:
<input id="inp">
let inp = document.querySelector('#inp').value;

inp.addEventListener('blur', function() {
	let digits = +inp.split('');
	let sum = 0;
	
	for (let digit of digits) {
		sum += digit;
	}
	
	console.log(sum);
}); */

/* let inp = document.querySelector('#inp')

inp.addEventListener('blur', function() {
	let digits = +inp.split('');
	let sum = 0;
	
	for (let digit of digits) {
		sum += digit;
	}
	
	console.log(sum);
}); */
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!