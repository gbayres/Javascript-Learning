var lines = ['500', '35.0'];

var consumption = (parseInt(lines[0]) / parseFloat(lines[1])).toFixed(3);

console.log(consumption + " km/l");
