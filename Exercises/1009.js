lines = ['JOAO', '500.0', '1230.30'];

fixed = parseFloat(lines[1]);
variable = 0.15 * parseFloat(lines[2]);
total = (fixed + variable).toFixed(2);

console.log("TOTAL = R$ " + total);
