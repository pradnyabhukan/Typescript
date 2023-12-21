function printName(person: { first: string, last: string}) :void {
    console.log(`${person.first} ${person.last}`)
}

printName({first: "Pradnya", last: "Bhukan"});
// printName({first: "Pradnya", last: "Bhukan", age: 23});
let pradnya = {first: "Pradnya", last: "Bhukan", age: 23};
printName(pradnya); // this does not give an error because here ts just checks whether the obj pradnya
// has the required parameters. anything else is alright IG


let coordinate : {x: number; y: number} = {
    x: 32,
    y:54
};

function randomCoordinates() :{x: number; y : number} {
    return {x: 43 , y:76};
}

type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }
}

function calculatePayout(song: Song): number{
    return song.numStreams * 0.0033;
}
function printSong(song: Song): void{
    console.log(`${song.title} - ${song.artist}`)
}

const mySong = {
    title: "ejrthfjr",
    artist: "sdfghj",
    numStreams: 456768,
    credits: {
        producer: "rtyuiop",
        writer: "cvbnm"
    }
}

console.log(printSong(mySong));
console.log(calculatePayout(mySong));

type Point = {
    x: number,
    y: number,
    z?: number, // optional param
}

type User = {
    readonly id: number,
    username: string
}

const user: User = {
    id: 345,
    username: "Pradnya"
};

console.log(user.id); //reading is fine
// user.id = 56789; //this is not


type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful; //intersection

const happyface: ColorfulCircle = {
    radius: 6,
    color: "yellow"
};

