lines = ['400'];

var total_days = parseInt(lines[0]);

var years = parseInt(total_days / 365);

console.log(years + ' ano(s)');

var rest = total_days % 365;

var months = parseInt(rest / 30);

console.log(months + ' mes(es)');

console.log(rest % 30  + ' dia(s)');

