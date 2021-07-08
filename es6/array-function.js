const nos = [1, 2, 3, 4, 5, 6];
// const square = [];
// for (let i = 0; i < nos.length; i++) {
//   square.push(nos[i] * nos[i]);
// }
// map : immutable array
const sqEven = nos.filter((value) => (value % 2 === 0)).map((value) => value * value);
console.log(sqEven, nos);