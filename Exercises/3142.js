lines = ['A','D','Z','ZZZ','AB'];

for (var i = 0; i < lines.length; i++){
	var x = lines[i].split('').reverse().join("");
	
	var soma = 0;

	for (var j = 0; j < x.length; j++){
		soma += (26 ** j) * (x[j].charCodeAt(0) - 64);
	}

	if (soma > 16384){
		console.log("Essa coluna nao existe Tobias!");
	}

	else{
		console.log(soma);
	}


}
