var lines = ['556'];

var total = parseInt(lines[0]);

var horas = parseInt(total / 3600);

var resto = total % 3600;

var minutos = parseInt(resto / 60);

var segundos = resto % 60;

console.log(horas + ':' + minutos + ':' + segundos);
