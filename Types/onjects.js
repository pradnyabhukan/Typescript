function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Pradnya", last: "Bhukan" });
// printName({first: "Pradnya", last: "Bhukan", age: 23});
var pradnya = { first: "Pradnya", last: "Bhukan", age: 23 };
printName(pradnya); // this does not give an error because here ts just checks whether the obj pradnya
// has the required parameters. anything else is alright IG
var coordinate = {
    x: 32,
    y: 54
};
function randomCoordinates() {
    return { x: 43, y: 76 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "ejrthfjr",
    artist: "sdfghj",
    numStreams: 456768,
    credits: {
        producer: "rtyuiop",
        writer: "cvbnm"
    }
};
console.log(printSong(mySong));
console.log(calculatePayout(mySong));
