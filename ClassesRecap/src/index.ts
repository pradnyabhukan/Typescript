class Player {
    public readonly first: string; //is public by default
    public readonly last: string;
    protected _score = 0; //private; ts infers it to be number
    // #score: number = 0; //private
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
        this.secretMethod(); // allowed because you are inside the class
    }
    get fullName():string {
        return `${this.first} ${this.last}`;
    }
    get score():number {
        return this._score;
    }
    set score(newScore: number) {
        if(newScore < 0){
            throw new Error("Score cannot be less than 0!");
        }
        this._score = newScore;
    }
    private secretMethod() : void {
        console.log("This is secret!");
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
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
    constructor(public name: string) {
        this.name = name;
    }
}
const monstera = new Plant('Monstera');
console.log(monstera);

//////////////////Classes and Interfaces///////////////////////////

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    // color = "red";
    constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string){}
    print(){
        console.log(`${this.color} ${this.brand}`);
    }
}

const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'black');
jacket1.print();

//////////////////Abstract Classes///////////////////////////

abstract class Cat {}

// const myCat = new Cat(); // error: Cannot create an instance of an abstract class.
//define a pattern/method that must be implemented by the child classes

abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number;
    greet() {
        console.log(`Hello ${this.first}`);
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number){
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number){
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const john = new FullTimeEmployee("John", "Doe", 100000);
john.greet();
console.log(john.getPay());

const pradnya = new PartTimeEmployee("Pradnya", "Bhukan", 20, 5000);
pradnya.greet();
console.log(pradnya.getPay());