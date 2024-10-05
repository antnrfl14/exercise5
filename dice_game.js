const readline = require('readline');

const rollDice = () => Math.floor(Math.random() * 6) + 1;

const playDiceGame = () => {
    const results = [];
    let attempts = 0;

    while (attempts < 3) {
        attempts++;
        const roll1 = rollDice();
        const roll2 = rollDice();
        const draw = [roll1, roll2];

        if (roll1 === 1 && roll2 === 1) {
            continue; 
        }

        if (roll1 === 6 && roll2 === 6) {
            results.push(draw);
            continue; 
        }

        if (roll1 !== 1 && roll2 !== 1) {
            results.push(draw);
            break;
        }
    }

    return results;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askForRuns = () => {
    rl.question('How many times would you like to run the simulation? ', (input) => {
        const numRuns = parseInt(input);
        if (isNaN(numRuns) || numRuns <= 0) {
            console.log('Please enter a valid positive number.');
            askForRuns();
        } else {
            const results = [];
            for (let i = 0; i < numRuns; i++) {
                results.push(playDiceGame());
            }
            console.log('Simulation Results:', results);
            rl.close();
        }
    });
};

askForRuns();
