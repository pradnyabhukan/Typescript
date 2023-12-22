"use strict";
class Player {
    // #score: number = 0; //private
    constructor(first, last) {
        this._score = 0; //private; ts infers it to be number
        this.first = first;
        this.last = last;
        this.secretMethod(); // allowed because you are inside the class
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be less than 0!");
        }
        this._score = newScore;
    }
    secretMethod() {
        console.log("This is secret!");
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 99999;
    }
}
const elton = new Player("Elton", "Steele");
// elton.score = 32;
// elton.first = 'hasdfjh'; //error: readonly
// elton.secretMethod(); // ts gives an error because it is a private method
console.log(elton.fullName);
console.log(elton.score);
elton.score = 32;
console.log(elton.score);
console.log("\n\n");
//parameter properties shorthand
class Plant {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
const monstera = new Plant('Monstera');
console.log(monstera);
class Bike {
    // color = "red";
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand}`);
    }
}
const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'black');
jacket1.print();
//////////////////Abstract Classes///////////////////////////
class Cat {
}
// const myCat = new Cat(); // error: Cannot create an instance of an abstract class.
//define a pattern/method that must be implemented by the child classes
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log(`Hello ${this.first}`);
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const john = new FullTimeEmployee("John", "Doe", 100000);
john.greet();
console.log(john.getPay());
const pradnya = new PartTimeEmployee("Pradnya", "Bhukan", 20, 5000);
pradnya.greet();
console.log(pradnya.getPay());
