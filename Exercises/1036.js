var lines = ['10.0 3.0 5.0'];

lines = lines[0].split(" ").map( x => parseFloat(x));

var a = lines[0],
    b = lines[1],
    c = lines[2];

var delta = b ** 2 - 4 * a * c;

if (delta >= 0 && a != 0 ){
    console.log('R1 = ' +  ((-b + delta ** (1/2)) / (2 * a)).toFixed(5) );
    console.log('R2 = ' +  ((-b - delta ** (1/2)) / (2 * a)).toFixed(5) );
}

else{
    console.log("Impossivel calcular");
}