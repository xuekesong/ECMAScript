function Person1(name, age) {
  this.name = name
  this.age = age
}
Person1.prototype.information = function () {
  return 'My name is ' + this.name + ', I am ' + this.age
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  information() {
    return `My name is ${this.name}, I am ${this.age}`;
  }
}

let person1 = new Person1('构造函数', 20);
console.log(person1.information());

let person = new Person('类', 18);
console.log(person.information());
