lines = ['7070'];

banknotes = [100, 50, 20, 10, 5, 2, 1];

cur = parseInt(lines[0]);

console.log(cur);

for (i = 0; i < 7; i++) {
	num = parseInt(cur / banknotes[i]);
	console.log(num + " nota(s) de R$ " + banknotes[i] + ",00");
	cur = cur % banknotes[i];
}
