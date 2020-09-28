var lines = ['4', '1 / 2 + 3 / 4', '1 / 2 - 3 / 4', '2 / 3 * 6 / 6', '1 / 2 / 3 / 4'];

function operate(n1, d1, n2, d2, op){
	if (op == '+'){
		return [n1*d2 + n2*d1, d1*d2]
	}
	
	else if (op == '-'){
		return [n1*d2 - n2*d1, d1*d2]
	}

	else if (op == '*'){
		return [n1*n2, d1*d2]
	}

	else if (op == '/'){
		return [n1*d2, n2*d1]
	}
}

function gcd(a, b){
	a = Math.abs(a);
	b = Math.abs(b);
	while (b){
		var t = b;
		b = a % b;
		a = t;
	}
	return a
}

function simple(num, den){
	return num / gcd(num, den) + '/' + den / gcd(num, den)

}

for (var i = 1; i < parseInt(lines[0]) + 1; i++) {
	
	var e = lines[i].split(' ');
	
	aux = operate(parseInt(e[0]),
		      parseInt(e[2]),
		      parseInt(e[4]),
		      parseInt(e[6]),
		      e[3]);
	
	console.log(aux[0]+ '/' + aux[1] + ' = ' + simple(aux[0], aux[1]));
	
}

	
	

