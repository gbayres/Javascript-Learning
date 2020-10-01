var lines = ['200 3 8'];

lines = lines[0].split(' ').map(x => parseInt(x));

console.log((lines[0] / (lines[1] + lines[2])).toFixed(2));