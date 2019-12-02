const fs = require('fs');

const loadProgram = inputFile => {
    const input = fs.readFileSync(inputFile).toString();
    return input.split(",").map(val => Number.parseInt(val));
}

const runProgram = program => {    
    for(let i=0; i < program.length; i=i+4) {
        const op = program[i];
        if(op === 99) {
            break;
        }
    
        const lhs = program[program[i+1]];
        const rhs = program[program[i+2]];
        const outputIndex = program[i+3];
        let result = 0;
        switch(op) {
            case 1:
                result = lhs + rhs;
            break;
            case 2:
                result = lhs * rhs;
            break;
        }
        program[outputIndex] = result;
    }

    return program[0];
}

const programs = ['test1.txt', 'test2.txt', 'test3.txt', 'test4.txt'];

programs.forEach((name) => {
    const program = loadProgram('./day2/' + name);
    runProgram(program);
    console.log(program);
});

const program = loadProgram('./day2/input.txt');
program[1] = 12;
program[2] = 2;
runProgram(program);
console.log(program[0]);