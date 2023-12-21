function square(num: number){
    // num.toUpperCase();
    return num * num;
}

square(3);
// square(true);
// square("hi");

function greet(person: string = "Stranger"){
    return `hi there! ${person}!`;
}

greet();
greet("Padnya");

const addNums = (x: number, y: number) : number => {
    return x + y;
}

function rando(num: number): number | string{
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num;
}


const colors = ["red", "orange", "yellow"];
colors.map(color =>{
    return color.toUpperCase();
});
