const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    for(let i = 0; i < input[0].length; i++) {
        str = input[0][i];
        console.log(str)
    }
});

/**
 * 다른 풀이
 * [...str].forEach(c => console.log(c))
 */