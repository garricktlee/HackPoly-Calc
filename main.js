var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Test Calculator';

function recalc() {
	var sum = parseInt(document.getElementById('input1').value);
	sum += parseInt(document.getElementById('input2').value);

	if (sum !== NaN) {
		document.write(sum);
	}
}