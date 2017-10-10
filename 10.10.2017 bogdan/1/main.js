var test = document.querySelector('.test');

//timer

function myAmim1 () {
	test.innerHTML+='.';
}

var interval = setInterval(myAmim1, 1000);

document.querySelector('button').onclick = function (){
	clearInterval(interval);
}