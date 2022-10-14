"use strict";

// Отработка изученного материала на работу с DOM
/* №1⊗jsPmDmPm
Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца. */
/* let elem = document.querySelector('#elem');
let inp = document.querySelector('input');

inp.addEventListener('blur', function(){
	elem.textContent += inp.value;
})
 */

/* №2⊗jsPmDmPm
Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац. */
/* let elems = document.querySelector('#elems');
let button = document.querySelector('#button');
let inputs = document.querySelectorAll('input');
let sum = 0;

button.addEventListener('click', function(){
	for (let elem of inputs){
		sum += +elem.value
	}
	elems.textContent += sum
}); */

/* let elems = document.querySelector('#elems');
let button = document.querySelector('#button');
let inputs = document.querySelectorAll('input');
let sum = 0;

button.addEventListener('click', function(){
	for (let i = 0; i < inputs.length; i++){
		sum += +inputs[i].value;
	}
	elems.textContent += sum
}); */

/* №3⊗jsPmDmPm
Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа. */
/* let inputs = document.querySelector("input");
let elems = document.querySelector("#elem");

inputs.addEventListener("blur", function () {
  let sum = 0;
  let str = inputs.value;
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  elems.textContent = sum;

});
 */

/* let inputs = document.querySelector("input");
let elems = document.querySelector("#elem");

inputs.addEventListener('blur', function(){
	let sum = 0;
	let str = inputs.value;
	let arr = str.split("");

	for (let elem of arr){
		sum += +elem
	}
	elems.textContent = sum;
	
}); */


/* №4⊗jsPmDmPm
Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество). */
/* let inputs = document.querySelector("input");
let elems = document.querySelector("#elem");

inputs.addEventListener('blur', function(){
	let sum = 0;
	let str = inputs.value;
	let arr = str.split(',');

	for (let i = 0; i < arr.length; i++){
		sum += +arr[i];
	}
	elems.textContent = sum/arr.length;
}); */

/* №5⊗jsPmDmPm
Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута. */
/* let inputs = document.getElementById('input');
inputs.addEventListener('focus', func);
inputs.addEventListener('blur', func2);
	
function func(){
	inputs.placeholder = '';
}

function func2(){
	let inputs = document.getElementById('input');
	let elems = document.getElementsByClassName('name');

	if (inputs.value !== 0){
		let str = inputs.value;
		let arr = str.split(' ');
		for (let i = 0; i < arr.length; i++){
			elems[i].value = arr[i];
		}
	}
	if (inputs.value == 0){
		inputs.placeholder = 'Ваше ФИО';
		for (let i = 0; i < elems.length; i++){
			elems[i].value
		}
	}
} */

/* №6⊗jsPmDmPm
Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте). */
/* let input =  document.querySelector('#input');

input.addEventListener('blur', capitalLetter);

function firstBigLetter(str){
	let arr = str.split(' ');

	for (let i = 0; i < arr.length; i++){
		arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
	}
	str = arr.join(' ');
	return str;
}

function capitalLetter(){
	input.value = firstBigLetter(input.value)
} */

/* №7⊗jsPmDmPm
Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте. */
/* let input = document.querySelector('#input');

input.addEventListener('blur', countLetter);

function countLetter(){
	let num = 0;
	let arr = input.value.split(' ');
	for (let i = 0; i < arr.length; i++){
		num ++;
	}

	let elem = document.querySelector('#elem');
	elem.textContent = num;
} */

/* №8⊗jsPmDmPm
Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31. */
/* let input = document.querySelector('input');
input.addEventListener('blur', changeData);

function reverseData(data, arr2 = []){
	let arr = data.split('.');
	arr2 = arr.reverse();

	data = arr2.join('-');
	return data;
}

function changeData(){
	input.value = reverseData(input.value);
} */

/* №9⊗jsPmDmPm
Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам). */
/* let input = document.querySelector('input');
let elem = document.querySelector('#elem');
let btn = document.querySelector('button');

btn.addEventListener('click', mirrorWord);

function mirrorWord (){
	let arr = input.value.split('');
	let arr2 = input.value.split('').reverse();

	for (let i = 0; i < arr.length; i++){
		if (arr[i] !== arr2[i]){
			elem.textContent = 'НЕТ';
		} else {
			elem.textContent = 'ДА';
		}
	}
} */

// №10⊗jsPmDmPm
// Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
/* let input = document.querySelector('input');
let elem = document.querySelector('#elem');

input.addEventListener('blur', func);

function func () {
	let arr = input.value.split('');
	for (let i = 0; i < arr.length; i++){
		if(arr[i] === '3'){
			return elem.textContent = 'Содержит';
		}
	}
	return elem.textContent = 'Не содержит';
} */

// №11⊗jsPmDmPm
// Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
/* let elem = document.querySelectorAll('p');
let btn  = document.querySelector('button');

btn.addEventListener('click', paragraphNumbers);

function paragraphNumbers(){
	for (let i = 0; i < elem.length; i++){
		elem[i].textContent = elem[i].textContent + ' ' + (i + 1);
 	}
} */


/* №12⊗jsPmDmPm
Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках. */
/* let linker = document.querySelectorAll('a');
for (let elem of linker){
	elem.addEventListener('click', func);
	function func(){
		this.textContent = this.textContent + '(' + this.href + ' )';
		this.removeEventListener('click', func);	 
	}
} */



/* №13⊗jsPmDmPm
Даны ссылки. Если ссылка начинается с https://, то добавьте ей в конец стрелку → (делается так: &rarr;). */
/* let linker = document.querySelectorAll('a');


function arrowLast(){
	for (let i = 0; i < linker.length; i++){
linker.addEventListener('click', arrowLast);
		if (linker[i].href.indexOf('http://') === 0){
			linker[i].innerHTML = linker[i].innerHTML + '&rarr';
		}
	}
} */


/* №14⊗jsPmDmPm
Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится. */
/* let elems = document.querySelectorAll('p');

for (let elem of elems){
	elem.addEventListener('click', function(){
		elem.textContent = elem.textContent * elem.textContent
	})
} */

/* №15⊗jsPmDmPm
Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату. */

/* let inp = document.querySelector('#inp');
let elem = document.querySelector('#elem');

inp.addEventListener('blur', dayOfTheWeek);

function dayOfTheWeek(){
	let week = [
		'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
	];

	let arr = inp.value.split('.');
	let reverseArr = arr.reverse();
	let strDate = reverseArr.join(',');
	let date = new Date(strDate);
	let day = date.getDay();

	elem.textContent = week[day];
} */


/* №16⊗jsPmDmPm
Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля. */
/* let input = document.querySelector('input[name=input]');
let regulation = document.querySelectorAll('input[name=changeValue]');


for (let elem of regulation){
	elem.addEventListener('click', increaseAndDecrease);
}

function increaseAndDecrease(){
	let sum = +input.value + Number(this.value);
	if (sum >= input.value){
		input.value = sum;
	} else {
		input.value = 0;
	}
} */


/* №17⊗jsPmDmPm
Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам. */
/* let elems = document.querySelectorAll('p');
let result = document.querySelector('input[name=result]');

for (let elem of elems){
	elem.addEventListener('click', futotalQuantitync);
}

let count = 0;

function futotalQuantitync(){
	count++;
	result.value = count;
} */

/* №18⊗jsPmDmPm
На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста */
/* let div = document.querySelectorAll('div');
let btn = document.querySelector('button');

btn.addEventListener('click', cut);

function cut(){
	for (let elem of div){
		elem.textContent = elem.textContent.slice(0, 10) + '...';
	}
} */

/* №19⊗jsPmDmPm
Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный. */
/* let input = document.querySelector('input[name=number]');
input.addEventListener('blur', chekedNumbers);

function chekedNumbers() {
	if (this.value >= 1 && this.value <= 100){
		this.style.border = '3px solid green';
	} else {
		this.style.border = '3px solid red';
	}
} */

// №20⊗jsPmDmPm
// Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
/* let input = document.querySelector('input[name=randoms]');
let btn = document.querySelector('button');

btn.addEventListener('click', random);

function random(){
	let str = '';
	let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < 8; i++){
		str += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	input.value = str;
} */

/* №21⊗jsPmDmPm
Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут. */
let input = document.querySelector('input[name=str]');
let button = document.querySelector('button');

button.addEventListener('click', characterShuffling)

function characterShuffling(){
	let str = [];
	let arr = input.value.split("")
	for (let i = 0; i < arr.length; i++){
	  str = [Math.floor(Math.random() * arr)] = arr.pop()
	}
	input.value = str.join("");
 }  
 
 function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min); 
}
 function characterShuffling() {
	let arr = input.value.split("");
	input.value = "";
	let res = [];
	while (arr.length > 0) {
	  let t = arr.splice(rand(0, arr.length - 1), 1)[0];
	  console.log(arr);
	  res.push(t);
	}
	input.value = res.join("");
 }; 

