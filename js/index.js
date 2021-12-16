const { PI } = Math;
// module.js中用这种方法
// exports.area = (r) => PI * r ** 2;
// exports.circumference = (r) => 2 * PI * r;

// es6
// export const es6_area = (r) => PI * r ** 2;
// export const es6_circumference = (r) => 2 * PI * r;
function es6_area(r) {
  return PI * r ** 2;
}

export { es6_area };