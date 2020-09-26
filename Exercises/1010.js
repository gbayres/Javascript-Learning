lines = ['36 1 25.09', '42 2 65.10'];

var sum = 0;

for (i=0; i < lines.length; i++) {
	items = lines[i].split(' ');
	sum += parseInt(items[1]) * parseFloat(items[2]);

}

console.log("VALOR A PAGAR: R$ " + sum.toFixed(2));


