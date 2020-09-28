var lines = ['SALIDA 10', 'SALIDA 12', 'SALIDA 10', 'VUELTA 20', 'ABEND'];

var salidas = 0;
var balance = 0;

for (var i = 0; lines[i] != "ABEND"; i++) {
	var a = lines[i].split(' ');

	if (a[0] == "SALIDA") {
		salidas += 1;
		balance += parseInt(a[1]);
	}	
	else  if (a[0] == "VUELTA")  {
		salidas -= 1	
		balance -= parseInt(a[1]);
	}


}

console.log(balance + '\n' + salidas);


