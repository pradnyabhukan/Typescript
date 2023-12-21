// let movieTitle: string = "Amadeus";
// movieTitle = "Arrival";

// movieTitle = 9; // error
// movieTitle.upper(); // error
movieTitle.toUpperCase();
// movieTitle.tUpperCase(); // error



// let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero"; // error


// Type inference
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
// tvShow = false; 

// the any type

let thing: any = "hello";
thing = 83;
thing = false;
thing();
thing.toUpperCase();


const movies = ["Arrival", "The thing", "Aliens", "Amadeus"];
let foundMovie: string;

for(let movie of movies){
    if(movie === "Amadeus"){
        foundMovie = movie;
    }
}
