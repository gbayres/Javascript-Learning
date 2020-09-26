lines = ['25', '100', '5.50'];

number = parseInt(lines.shift());
time = parseInt(lines.shift());
perhour = parseFloat(lines.shift());
salary = (time * perhour).toFixed(2) 

console.log('NUMBER = ' + number + '\n' + 'SALARY = U$ ' + salary);

