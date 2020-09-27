lines = ['7 14 106'];

lines = lines[0].split(' ').map(x => parseInt(x));

function higher(a ,b) {
	return a < b ? -1 : a > b ? 1 : 0;
}
console.log(lines.sort(higher)[2] + " eh o maior");
