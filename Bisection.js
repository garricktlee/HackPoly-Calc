function Bisection(){

    // clear the screen before we output anything
    document.getElementById("demo").innerHTML = "";

	var nmax = parseInt(document.getElementById("nmax").value);
	var a = parseInt(document.getElementById("a").value);
	var b = parseInt(document.getElementById("b").value);
	var fa, fb, fc, error, c, e;

	e = 0.5e-6;

	fa = f(a);
	fb = f(b);

	if(fa < 0 && fb < 0 || fa === fb || fa > 0 && fb > 0){
		//output a, b, fa, fb;
		document.getElementById("demo").innerHTML += "<br>" + a + " " + b + " " + fa + " " + fb;

		//output "function has same signs at a and b"
		document.getElementById("demo").innerHTML += "<br>function has same signs at a and b";
		return;
	}

	error = b-a;
	for(var n = 0; n <= nmax; n++){
		error = error/2;
		c = a + error;
		fc = f(c);

		//output n, c, fc, error
		document.getElementById("demo").innerHTML += "<br>" + n + " " + c + " " + fc + " " + error;

		if(Math.abs(error) < e){
			//output "convergence"
			document.getElementById("demo").innerHTML += "<br>convergence";
			return;
		}
		if(fa < 0 && fc >0 || fa >0 && fc< 0){
			b = c;
			fb = fc;
        }else{
            a = c;
            fa = fc;
        }
    }
}

function f(x){
    var f = 0.0;
    f = (x*x*x)-(3*x)+1;

    return f;
}
