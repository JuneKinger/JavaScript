//Try adding new properties inside constructor.
class Astronaut {
    constructor(name, age, mass = 54, size){
      this.name = name;
      this.age = age;
      this.mass = mass;
    }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.

let fox1 = new Astronaut('Fox1', 10, 10);

fox1.size = 'small';
console.log(fox1);

let turtle = new Astronaut('Turtle', 20);
console.log(turtle);
console.log(turtle.name, turtle.age, turtle.mass);

