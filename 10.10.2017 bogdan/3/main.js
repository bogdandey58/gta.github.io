var progress = document.querySelector('progress');
// var start=0;

var myProgress = setInterval(function () {
	console.log(progress.value)
	var start = parseInt(progress.value)
	if (start>100) {
		clearInterval(progress);
	}
	else {
		progress.value = start;
		start++;
	}

}, 200);