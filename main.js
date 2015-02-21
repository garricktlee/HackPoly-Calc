var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Test Calculator';

var sum = 0;

if(confirm("Addition Calculator") === true){
	sum = parseInt(prompt("Enter an Int"));
	sum += parseInt(prompt("Enter 2nd Int"));
	document.write(sum);
}
