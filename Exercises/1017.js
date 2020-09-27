lines = ['10', '85'];

time = parseInt(lines[0]);
speed = parseInt(lines[1]);
distance = time * speed;

console.log((distance / 12).toFixed(3));

