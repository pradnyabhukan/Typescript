
// Generics allow us to define reusable functions and classes that work with 
//multiple types rather than a single type

const nums: Array<number> = [];
//Array is a generic

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "John";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

//Write your own Generic
function identity(item: number): number {
    return item;
} 

function stringIdentity(item: string): string {
    return item;
} 

function anyIdentity(item: any): any {
    return item;
}

function genericIdentity<Type>(item: Type): Type {
    return item;
}

genericIdentity<number>(7);
genericIdentity<string>('hello');


function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

console.log(getRandomElement<string>(['a', 'b', 'c', 'd']));
console.log(getRandomElement<number>([3,4,5,6,7,8,9]));

genericIdentity(['d', 's','g']); //inferred as string : function genericIdentity<string[]>(item: string[]): string[]

function merge <T extends object, U extends object> (obj1: T, obj2: U) { // return is inferred: function merge<T, U>(obj1: T, obj2: U): T & U
    return{
        ...obj1,
        ...obj2
    }
}
// console.log(merge({name: 'P'}, {age: 23}));
const combo = merge({name: 'P'}, {age: 23});
// const combo: {name: string;} & {age: number;}


// when we try to spread anything to an object which is not an o bject it returns empty object

// console.log(merge({name: 'P'}, 23)); // no error: {name: 'P'}
console.log(merge({name: 'P'}, {num: 17}));


interface Lengthy {
    length: number;
}

// function printDoubleLength <T> (thing: T) : number{
//     return thing.length * 2; //Property 'length' does not exist on type 'T'
// }

function printDoubleLength <T extends Lengthy> (thing: T) : number{
    return thing.length * 2; 
}

function makeEmptyList <T = number> (): T[] { // defaults to number
    return [];
}

const strings = makeEmptyList<string>(); // const strings: string[]
const numbers = makeEmptyList(); //const numbers: number[]

//Generic classess

interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = [];
    add(el: T) {
        this.queue.push(el);
    }
}

const songs = new Playlist<Song> ();
songs.add({
    title: 'sdgf', 
    artist: 'dsfgyuge'
});

const videos = new Playlist<Video> ();