lines = ['10.0', '10.0'];

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());

console.log("MEDIA = " + ((3.5 * a + 7.5 *  b) / 11).toFixed(5));

