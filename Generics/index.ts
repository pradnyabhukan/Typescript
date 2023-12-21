function identity<Type>(item: Type): Type {
    return item;
}
 
identity<number>(7);

function getRandomElement<T>(list: T[]) : T{
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

getRandomElement<number>([4,3,5,7,5]);
getRandomElement<boolean>([true, false, true, true, false]);