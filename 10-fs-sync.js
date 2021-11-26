const { readFileSync, writeFileSync } = require('fs')

//readFileSync arguments filename
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

//writeFileSync arguments filename, value we want to pass
//to append a text instead of overwriting, which is the default, add a third argument { flag: 'a' }
writeFileSync('./content/result-sync.txt', `Hear is the result: ${first}, ${second}`, { flag: 'a' })

console.log('done with this task');
console.log('starting the next one');