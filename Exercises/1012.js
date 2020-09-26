var lines = ['12.7 10.4 15.2'];

lines = lines[0].split(' ');
var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);


function tri(a, c) {
	return (a * c / 2).toFixed(3);
}

function cir(c) {
	return (3.14159 * c ** 2).toFixed(3);
}

function tra(a, b, c) {
	return ((a + b) * c / 2).toFixed(3);
}

function sqr(b) {
	return (b ** 2).toFixed(3);
}

function rec(a, b){
	return (a * b).toFixed(3);
}

console.log('TRIANGULO: ' + tri(a, c)); 
console.log('CIRCULO: ' + cir(c));
console.log('TRAPEZIO: ' + tra(a,b,c));
console.log('QUADRADO: ' + sqr(b));
console.log('RETANGULO: ' + rec(a,b));

