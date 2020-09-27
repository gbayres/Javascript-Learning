lines = ['1.0 7.0', '5.0 9.0'];

var new_lines = [];
var l = lines.map(x => y = x.split(' ').map(y => parseFloat(y)));

console.log(Math.sqrt((
	l[0][0] - l[1][0]) ** 2 +
	(l[0][1] - l[1][1] ) ** 2).toFixed(4));
