const path = require('path');

// __basename and __dirname and __filename exists

// base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// create path object so properties can be easily accessed
console.log(path.parse(__filename));

// concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
