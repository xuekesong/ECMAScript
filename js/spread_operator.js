// es5
function sum(x, y, z) {
  return x + y + z;
}

let list = [5, 6, 7];
let total = sum.apply(null, list);
console.log(total);

// 扩展运算符
const es6_sum = (x, y, z) => x + y + z;
const es6_list = [5, 6, 7];
const es6_total = es6_sum(...list);
console.log(es6_total);