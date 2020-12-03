const path = require('path');

var pathObj = path.parse(__filename);
console.log(`File name : ${pathObj.name}`) //Template string es6
console.log('Extension : ' + pathObj.ext)