function combineCharacter(argument: string, inputStart: number, inputEnd: number): string {
    let returnCase: string = argument.slice(inputStart, inputEnd);
    return returnCase;
}

console.log(combineCharacter("Learning Typescript is different than Javascript", 9, 19));
