"use strict";
console.log("Type narrowing");
//typepf gaurds: doing a type check before working with a value
function triple(value) {
    if (typeof value === 'number') {
        return value * 3;
    }
    return value.repeat(3);
}
console.log(triple(3)); // 9
console.log(triple('Hi')); // HiHiHi
//Truthiness gaurds
const el = document.getElementById('idk'); // ts: const el: HTMLElement | null
if (el) {
    el; //ts: const el: HTMLElement
}
const printLEtters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log('You did not pass in a word!');
    }
};
printLEtters('Pradnya');
printLEtters(''); // You did not pass in a word!
printLEtters(); // You did not pass in a word!
// Equality Narrowing
function someDemo(x, y) {
    if (x === y) {
        //x and y are strings.
        x.toUpperCase();
    }
}
someDemo(3, "3");
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: 'Better Call Saul', numEpisodes: 40, episodeDuration: 60 }));
console.log(getRuntime({ title: '', duration: 160 }));
//instanceof: allows us to check if one thing is an instance of another
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
printFullDate(new Date());
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        console.log("User");
    }
    else {
        console.log("Company");
    }
}
printName(new User('Pradnya'));
printName(new Company('Onjax'));
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        console.log("Meow!");
    }
    else {
        console.log("Woof!");
    }
}
makeNoise({ name: '', numLives: 3 });
makeNoise({ name: '', breed: '' });
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case ("pig"):
            return "Oink!";
        case ("cow"):
            return "Moo!";
        case ("rooster"):
            return "Cockadoodledoo!";
        case ("sheep"):
            return "Baaa!";
        default:
            //we should never make it here, if we handled all cases correctly
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: 'Stevie Chicks',
    weight: 2,
    age: 1.5,
    kind: 'rooster'
};
console.log(getFarmAnimalSound(stevie));
