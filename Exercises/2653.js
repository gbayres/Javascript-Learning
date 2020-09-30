var lines = ['(',
             '(',
             '(',
             ')',
             ')(',
             ')(',
             '))(',
             '(',
             '(',
             '()',
             ')',
             '(((',
             ')',
             '(()',
             ')(',
             '('];

var already_there = [];

for (i=0; i < lines.length; i++){
    if (!already_there.includes(lines[i]) && lines[i] != ''){
        already_there.push(lines[i]);
    }
}

console.log(already_there.length);