lines = ['2 3 2 6'];

lines = lines[0].split(' ').map( x => parseInt(x));

var a = lines[0],
    b = lines[1],
    c = lines[2],
    d = lines[3];

conditions = [b > c,
              d > a,
              c + d > b + a,
              c > 0,
              d > 0,
              !(a % 2)]

//console.log(conditions);

if (conditions.every( x => x)) {
    console.log("Valores aceitos");    
}

else {
    console.log("Valores nao aceitos");
}