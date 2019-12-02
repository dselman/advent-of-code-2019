
const calculateFuel = mass => {
    if(mass > 0) {
        const fuel = Math.max(Math.floor( mass / 3) - 2, 0);
        return fuel + calculateFuel(fuel);    
    }
    else {
        return 0;
    }
}

const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./day1/input.txt')
});

const moduleMasses = [];
lineReader.on('line', function (line) {
    moduleMasses.push(calculateFuel(Number.parseInt(line)));
});

lineReader.on('close', function (line) {
    const total = moduleMasses.reduce((a, b) => a + b, 0)
    console.log(`Total fuel ${total}`);
});
