const fs = require('fs');

const loadProgram = (inputFile, noun, verb) => {
    const input = fs.readFileSync(inputFile).toString();
    const program = input.split(",").map(val => Number.parseInt(val));

    if(noun && verb) {
        program[1] = noun;
        program[2] = verb;
    }

    return program;
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

const program = loadProgram('./day2/input.txt', 12, 2);
runProgram(program);
console.log(`Step 1 ${program[0]}`);

for(let noun=0; noun < 100; noun++ ) {
    for(let verb=0; verb < 100; verb++ ) {
        const program = loadProgram('./day2/input.txt', noun, verb);
        runProgram(program);

        if(program[0] === 19690720) {
            console.log(`noun: ${noun}, verb ${verb}`);
            console.log(`Step 2 ${100 * noun + verb}`);
        }
    }
}
