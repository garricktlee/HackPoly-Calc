// computes a choose b
function combination()
{
    // clear the output section
    fresh_combination();

    // get the input
    var a = parseInt(document.getElementById("lhs").value);
    var b = parseInt(document.getElementById("rhs").value);
    var c = a - b;

    if (a < 0 || b < 0 || c < 0) {
        document.getElementById("combination_output").innerHTML = "0";
        return;
    }

    // expansion of a!
    document.getElementById("combination_output").innerHTML = "(";
    if (a > 0) {
        for (var i = a; i >= 1; --i) {
            document.getElementById("combination_output").innerHTML += i;

            if (i > 1) {
                document.getElementById("combination_output").innerHTML += " x ";
            }
        }
    } else {
        document.getElementById("combination_output").innerHTML += "1";
    }
    document.getElementById("combination_output").innerHTML += ")";

    // division
    document.getElementById("combination_output").innerHTML += " / ";

    // expansion of b!
    document.getElementById("combination_output").innerHTML += "(";
    if (b > 0) {
        for (var i = b; i >= 1; --i) {
            document.getElementById("combination_output").innerHTML += i;

            if (i > 1) {
                document.getElementById("combination_output").innerHTML += " x ";
            }
        }

    } else {
        document.getElementById("combination_output").innerHTML += "1";
    }
    document.getElementById("combination_output").innerHTML += ")";

    // expansion of (b - a)!
    document.getElementById("combination_output").innerHTML += "(";
    if (c > 0) {
        for (var i = c; i >= 1; --i) {
            document.getElementById("combination_output").innerHTML += i;

            if (i > 1) {
                document.getElementById("combination_output").innerHTML += " x ";
            }
        }
    } else {
        document.getElementById("combination_output").innerHTML += "1";
    }
    document.getElementById("combination_output").innerHTML += ")";

    document.getElementById("combination_output").innerHTML += " = ";
    document.getElementById("combination_output").innerHTML += factorial(a) / (factorial(b) * factorial(c));
}

// returns a!
function factorial(a)
{
    var product = 1;

    for(var i = 2; i <= a; ++i) {
        product *= i;
    }

    return product;
}

// clear the screen
function fresh_combination()
{
    document.getElementById("combination_output").innerHTML = "";
}
