var lines = ['20', '10 10'],
    time_left = parseInt(lines[0]),
    sum = lines[1].split(' ').reduce((a, b) => parseInt(a) + parseInt(b));

message = (a, b) => {return a <= b ? "Farei hoje!" : "Deixa para amanha"};

console.log(message(sum, time_left));