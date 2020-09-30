var lines = ['47', '21', '9'];

lines = lines.map( x => parseInt(x));

var brothers = [lines[0] - lines[1] - lines[2], lines[1], lines[2]];

console.log(brothers.reduce((a,b) => Math.max(a,b)));
