var lines = ['1', '1'];

var L = parseInt(lines[0]),
    C = parseInt(lines[1]),
    n1 = 2 * C * L - L - C + 1,
    n2 = 2 * C + 2 * L - 4;

console.log(n1 + '\n' + n2);

