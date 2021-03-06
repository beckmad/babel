import 'core-js';

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello! My name is ${this.name} and I am ${this.age}`);
  }
}

const duck = new Animal('Bruno', 20);

duck.greet();

const arr = [1, 2, 3, [4, 5]];

console.log(arr.flat());
