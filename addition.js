function recalc() {
	var sum = parseInt(document.getElementById("input1").value);
	sum += parseInt(document.getElementById("input2").value);

	document.getElementById("results").innerHTML = sum;
}