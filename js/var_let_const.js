{
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
console.log(b); // b is not defined
console.log(c); // c is not defined

let d = 40;
const e = 50;

d = 60;
console.log(d); // 60
console.log(e); // 50