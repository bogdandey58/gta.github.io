var test = document.querySelector('.test');
//setTimeot 
var timer;

function myAnim(){
	test.innerHTML+='.';
	timer = setTimeout(myAnim, 1000);
}
myAnim () ;

document.querySelector('button').onclick = function (){
	clearTimeout(timer);
}