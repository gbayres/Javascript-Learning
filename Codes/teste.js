// var a, b, rest;
// ({a, b, ...rest} = {a:1, b:2, c:3, d:4})
// console.log(a);

// function retor ({id, piroca}) {
//     console.log(id, piroca);
// }

// var x = {id:2, piroca:32};
// retor(x);

var x = [[1,2,3], [3,2,1], [4,5,3], [3,2,1]];
console.log(x.reduce((a,b) => a.concat(b)));

var x = [[1,2,3], [3,2,1], [4,5,3], [3,2,1]];
console.log(x.reduce((a,b) => [...a, ...b]));

var x = [[4,5,6], [7,8,9], [10,11,12]];
console.log(x.reduce((a,b) => a.concat(b), [1,2,3]))

// [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]
// [[1,2,3,4,5,6], [7,8,9], [10,11,12]]
// [[1,2,3,4,5,6,7,8,9], [10,11,12]]
// [[1,2,3,4,5,6,7,8,9,10,11,12]]
