var btn = document.querySelector('.button');
var text = document.querySelector('.text');
var list = document.querySelector('.list');

function checkDouble(doub){
	var arrLi = document.getElementsByTagName('li');
	var arr = Array.from(arrLi); //создаю обычный массив по стандариу ES6

	for (var i = 0; i < arr.length; i++){
		if (doub == arr[i].textContent){
			var conf = confirm('Вы уверены, что хотите добавить повторяющийся пункт?')
			if (conf == true){
				return;
			}
			else{
				return text.value = '';
			}
		}
	}
}

btn.addEventListener ('click', function (){
	checkDouble(text.value);
	if (text.value == ''){
		alert('Введите, пожалуйста текст');
	}
	else{
		var newLi = document.createElement('li');
		newLi.textContent = text.value;
		list.appendChild(newLi);
		text.value = '';
	}
})

function underline(li){
	if (li.style.textDecoration == 'none'){
		li.style.textDecoration = 'line-through';
	}
	else {
		li.style.textDecoration = 'none';
	}
}

list.addEventListener ('click', function (event){
	var target = event.target;
	console.log(target);
	if (target.tagName == 'LI') {
		underline(target);
	}
})

