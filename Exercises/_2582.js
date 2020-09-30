var lines = ['11',
             '0 0',
             '1 0',
             '2 0',
             '3 0',
             '4 0',
             '5 0',
             '6 0',
             '7 0',
             '8 0',
             '9 0',
             '10 0',];

var dict = ['PROXYCITY',
            'P.Y.N.G.',
            'DNSUEY!',
            'SERVERS',
            'HOST!',
            'CRIPTONIZE',
            'OFFLINE DAY',
            'SALT',
            'ANSWER!',
            'RAR?',
            'WIFI ANTENNAS'];

var n = parseInt(lines[0]);

for (i=1; i < n + 1; i++){
    console.log(dict[lines[i].split(' ').reduce( (a, b) => parseInt(a) + parseInt(b))]);
}