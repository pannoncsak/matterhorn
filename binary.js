function dec2bin() {
var x = document.getElementById("deci").value;
if ((/[^0-9]/g.test(x)) || x == "") {
alert ("You must enter an integer decimal number!");
document.getElementById("deci").value = "";
document.getElementById("deci").focus();
return false;
}
x = parseInt(x);
var bin = x.toString(2);
var figs = "A szám bináris alakja: " + bin + "<br>";

document.getElementById("result").innerHTML = figs;
}