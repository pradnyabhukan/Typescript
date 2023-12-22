"use strict";
class Player {
    //static means the property will not be associated with every object, but will be associated with the class itself
    static description = "Player in our game";
    //_score = 0; // used earlier to tell devs to treat it as private variables
    // score = 0; // class fields
    #score = 0;
    numLives = 10;
    constructor(first, last) {
        //calls automatically when instantiated
        console.log("Player Instantiated!");
        this.first = first;
        this.last = last;
        // this.score = 0; //used earlier
        // this.numLives = 10;
    }
    get fullName() { //getter
        return `${this.first} ${this.last}`;
    }
    set fullName(newName) {
        const [first, last] = newName.split(" ");
        this.first = first;
        this.last = last;
    }
    get score() {
        return this.#score;
    }
    set score(newScore) {
        if(newScore < 0){
            throw new Error("Score must be positive");
        }
        this.#score = newScore;
    }
    // getScore() { // to access private variables; so no one can change it
    //     return this.#score;
    // }
    updateScore(score) {
        this.#score = score;
    }
    taunt() {
        console.log("BOOYAH!");
    }
    loseLife() {
        this.numLives -=1;
    }
    #secret() { //can be called from inside the class though
        console.log("SECRET");
    }
}


const player1 = new Player("Blue", "Steel");
player1.taunt();
console.log(player1.first);
console.log(player1.last);
console.log(player1);
console.log(player1.numLives); //10
player1.loseLife();
console.log(player1.numLives); //9
// console.log(player1.#score);//error private field
player1.updateScore(27);
// console.log(player1.getScore());
// player1.#secret(); //error
console.log("\n\n");
console.log("full name : ", player1.fullName); // access getter
console.log("score: ", player1.score); // access getter
// player1.score = -32; //error
player1.score = 32;
console.log("score: ", player1.score);

console.log("\n\n");
console.log("full name : ", player1.fullName);
player1.fullName = "Pradnya Bhukan";
console.log("full name : ", player1.fullName);
console.log(player1);

console.log("\n\n");
const player2 = new Player("Charlie", "Brown");
player2.taunt();
console.log(player2.description); //undefined
console.log(Player.description); //Player in our game

console.log("\n\n \tEXTENDS");

class AdminPlayer extends Player {
    constructor(first, last, powers) {
        super(first, last); // reference parent constructor
        this.powers = powers;
    }
    isAdmin = true;
}
const admin = new AdminPlayer('admin', 'mCadmin', ['add', 'delete']);
console.log(admin);
console.log(admin.taunt());