lines = ['3','3 22','2 11','3 39','5','1 25','2 20','3 31','2 40','6 70','0'];


var qual_cidade = 1;

for (var i = 0; (i < parseInt(lines.length)) & (lines[i] != '0'); i++ ){
	
	console.log("Cidade# " + qual_cidade  + ":");
	qual_cidade++;

	var j = parseInt(lines[i]);

	var consumo_total = 0;
	var total_pessoas = 0;
	var consumos_médios = [];

	for (var k = 0; k < j; k++){
		
		i++;
		
		var aux = lines[i].split(' ').map( x => parseInt(x));
		total_pessoas += aux[0];
		consumo_total += aux[1];  
		consumo_médio = parseInt(aux[1] / aux[0]);
		consumos_médios.push([aux[0], consumo_médio]);

	}

	consumos_médios.sort((a,b) => a[1] - b[1]);
	consumos_médios = consumos_médios.map( x => x.join("-"));
	console.log(consumos_médios.join(" "));
	console.log("Consumo medio: " + (consumo_total / total_pessoas).toFixed(2) + " m3.");
}
