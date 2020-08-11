const minimist = require('minimist');

console.log('this is argv', process.argv );
console.log(minimist(process.argv.slice(2)));
