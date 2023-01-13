//Modules
// Modules - it is encapsulated code (we only share the minimum only what is required)
// CommonJS, every file is module (by default)

const names = require('./2-Names')
const sayHi = require('./3-util')
const data = require('./4-alternativeflavor')
require('./5-mindgrenade')
//when you import a module you also invoke it 
console.log(data)
console.log(names)
console.log(sayHi)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)



