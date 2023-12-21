let age : number | string = 29;
age = "23"; 

function printAge(age: string | number) : void {
    console.log(`you are ${age} year old`);
    if(typeof age === 'number'){
        age * 2;
    }
    if(typeof age === 'string'){

    }
}

printAge('23');
printAge(23);

//arrays

const stuff : (string | number)[] = ['3', 4,  5];

//literal types

const mood : "Happy" | "Sad" = "Happy";