type Point_type = {
    x: number;
    y: number;
}

//interdace
interface Point_interface {
    x: number;
    y: number;
}

const pt : Point_interface = {x: 12, y: 75};

interface Person { 
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    sayHi: () => string;
    sayHello: (name: string) => string;
}

const Pradnya: Person = {
    id: 5274, //cannot be changed
    first: 'Pradnya',
    last: 'Bhukan',
    sayHi: () => "hi",
    sayHello: () => "hello",
}

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number,
}

const shoes: Product = {
    name: "xyz",
    price: 100,
    applyDiscount(amount: number){  // amount = 0.3
        const newPrice = this.price * (1 - amount);   // (1-0.3)
        this.price = newPrice;
        return this.price;
    }
}

interface Dog {
    name: string,
    age: number,
}

interface Dog{
    breed: string,
    bark: () => string,
}

//now the dog interface has 4 properties: name, age, breed, bark

//EXTENDING INTERFACES

interface ServiceDog extends Dog {
    //already has name, age, breed, bark because we have extended it
    job: "drug sniffer" | "guide" | "bomb";
}

//multiple inheritance
interface Person_2 { 
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Person_2, Employee{
    level: string;
    languages: string[];
}

const P: Engineer = {
    name: "P",
    id: 53857,
    email: "",
    level: "junior",
    languages: ["JS", "TS", "Vue"],
}