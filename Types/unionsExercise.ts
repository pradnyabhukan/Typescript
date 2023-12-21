// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
const highScore : number | boolean = 34;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
const stuffs : number[] | string[] = [1,2,3];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)
type SkiSchoolStudent = {
    name: string,
    age: number,
    sport: "ski" | "snowboard",
    level: SkillLevel
};

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number
type rgb = {
    r: number,
    g: number,
    b: number
};

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number
type hsl = {
    h: number,
    s: number,
    l: number
};

// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors: (rgb | hsl)[] = [{r: 45, g: 23, b: 67}];

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format

function greet(name : string | string[]): void{
    if(typeof name === "string"){
        console.log(`Hello, ${name}`);
    }
    if(Array.isArray(name)){
        for(let i=0 ;i<name.length;i++) 
        console.log(`Hello, ${name[i]}`);
    }
}