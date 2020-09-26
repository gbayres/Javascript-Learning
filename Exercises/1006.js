lines = ['5.0', '6.0', '7.0'];

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

console.log("MEDIA = " + ((2 * a + 3 * b + 5 * c ) / 10).toFixed(1));

