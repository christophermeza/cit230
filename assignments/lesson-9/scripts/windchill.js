var h = parseInt(document.getElementById("high").innerHTML);
var l = parseInt(document.getElementById("low").innerHTML);
var t = parseFloat((h + l) / 2);

var ws = document.getElementById("windspeed").innerHTML;
var s = Math.pow(ws, 0.16);

var f = 35.74 + 0.6215 * t - 35.75 * s + 0.4275 * t * s;

document.getElementById("windchill").innerHTML = f.toFixed(2);