"use strict";
// Generics allow us to define reusable functions and classes that work with 
//multiple types rather than a single type
const nums = [];
//Array is a generic
const inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "John";
const btn = document.querySelector(".btn");
//Write your own Generic
function identity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function anyIdentity(item) {
    return item;
}
function genericIdentity(item) {
    return item;
}
genericIdentity(7);
genericIdentity('hello');
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(['a', 'b', 'c', 'd']));
console.log(getRandomElement([3, 4, 5, 6, 7, 8, 9]));
genericIdentity(['d', 's', 'g']); //inferred as string : function genericIdentity<string[]>(item: string[]): string[]
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// console.log(merge({name: 'P'}, {age: 23}));
const combo = merge({ name: 'P' }, { age: 23 });
// const combo: {name: string;} & {age: number;}
// when we try to spread anything to an object which is not an o bject it returns empty object
// console.log(merge({name: 'P'}, 23)); // no error: {name: 'P'}
console.log(merge({ name: 'P' }, { num: 17 }));
// function printDoubleLength <T> (thing: T) : number{
//     return thing.length * 2; //Property 'length' does not exist on type 'T'
// }
function printDoubleLength(thing) {
    return thing.length * 2;
}
function makeEmptyList() {
    return [];
}
const strings = makeEmptyList(); // const strings: string[]
const numbers = makeEmptyList(); //const numbers: number[]
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
songs.add({
    title: 'sdgf',
    artist: 'dsfgyuge'
});
const videos = new Playlist();
