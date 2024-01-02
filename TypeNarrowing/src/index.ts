console.log("Type narrowing");

//typepf gaurds: doing a type check before working with a value

function triple(value: number | string) {
    if(typeof value === 'number') {
        return value * 3;
    }
    return value.repeat(3);
}
console.log(triple(3));      // 9
console.log(triple('Hi'));   // HiHiHi

//Truthiness gaurds

const el = document.getElementById('idk'); // ts: const el: HTMLElement | null
if(el){
    el; //ts: const el: HTMLElement
}

const printLEtters = (word?: string) => {
    if(word) {
        for(let char of word) {
            console.log(char);
        }
    } else {
        console.log('You did not pass in a word!');
    }
}

printLEtters('Pradnya');
printLEtters(''); // You did not pass in a word!
printLEtters(); // You did not pass in a word!

// Equality Narrowing

function someDemo(x: string | number, y: string | boolean) {
    if(x === y) {
        //x and y are strings.
        x.toUpperCase();
    }
}

someDemo(3, "3");

// in operator

interface Movie {
    title: string,
    duration: number,
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number,
}

function getRuntime(media: Movie | TVShow) {
    if("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}

console.log(getRuntime({title: 'Better Call Saul', numEpisodes: 40, episodeDuration: 60}));
console.log(getRuntime({title: '', duration: 160}));

//instanceof: allows us to check if one thing is an instance of another

function printFullDate(date: string | Date) {
    if(date instanceof Date){
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
}
printFullDate(new Date());

class User {
    constructor(public username: string) {}
}
class Company {
    constructor(public name: string) {}
}

function printName(entity: User|Company) {
    if(entity instanceof User){
        console.log("User");
    }else {
        console.log("Company");
    }
}

printName(new User('Pradnya'));
printName(new Company('Onjax'));

//Type Predicates
//syntax: parameterName is Type

interface Cat {
    name: string;
    numLives: number;
}
interface Dog {
    name: string;
    breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog) {
    if(isCat(animal)){
        console.log("Meow!");
    } else{
        console.log("Woof!")
    }
}

makeNoise({name: '', numLives: 3});
makeNoise({name: '', breed: ''});

//discriminated Unions
interface Rooster {
    kind: "rooster";
    name: string;
    weight: number;
    age: number;
}

interface Cow {
    kind: "cow";
    name: string;
    weight: number;
    age: number;
}

interface Pig {
    kind: "pig"
    name: string;
    weight: number;
    age: number;
}

interface Sheep {
    kind: "sheep"
    name: string;
    weight: number;
    age: number;
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch(animal.kind) {
        case("pig"): 
            return "Oink!";
        case("cow"):
            return "Moo!";
        case("rooster"):
            return "Cockadoodledoo!";
        case("sheep"):
            return "Baaa!";
        default:
            //we should never make it here, if we handled all cases correctly
            const _exhaustiveCheck: never = animal
            return _exhaustiveCheck;
    }
}

const stevie: Rooster = {
    name: 'Stevie Chicks',
    weight: 2,
    age: 1.5,
    kind: 'rooster'
}

console.log(getFarmAnimalSound(stevie));
