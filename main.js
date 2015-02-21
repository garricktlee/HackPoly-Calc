var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Test Calculator';

if (confirm("Addition Calculator") === true) {
	var sum = parseInt(prompt("Enter an Int"));
	sum += parseInt(prompt("Enter 2nd Int"));
	document.write(sum);
}
