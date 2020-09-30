var lines = ['6 5',
            '30',
            '30',
            '40',
            '250',
            '100',
            '15',
            '1',
            '5',
            '3',
            '2',
            '4',
            '2 1',
            '30',
            '15',
            '1'];

for (var k = 0; k < lines.length; k += n[0] + n[1] + 1 ){
    
    
    var n = lines[k].split(' ').map( x => parseInt(x) );

    var notas = lines.slice(k + 1, k + 1 + n[0]).map( x => parseInt(x) );
    var posições = lines.slice(k + 1 + n[0], k + 1 + n[0] + n[1]).map( x => parseInt(x) );
    
    notas = notas.sort( (a, b) => a - b ).reverse();

    for (var i = 0; i < n[1]; i++){
        console.log(notas[posições[i] - 1]);
    }
    
}