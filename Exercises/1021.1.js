lines = ['576.43'];

banknotes = [100, 50, 20, 10, 5, 2];

cur = parseFloat(lines[0]);

console.log('NOTAS:');

for (var i = 0; i < 6; i++) {
	
	num = parseInt(cur / banknotes[i]);
	cur = cur % banknotes[i];
	console.log(num + " nota(s) de R$ " + banknotes[i] + ".00");
}	

coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log('MOEDAS:');

for (var i = 0; i < 6; i++) {
	
	num = parseInt(cur / coins[i]);
	console.log(num + " moeda(s) de R$ " + coins[i].toFixed(2));
	cur = (cur % coins[i]).toFixed(2);
}

