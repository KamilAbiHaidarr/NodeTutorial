//we can destructure them 
const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync("./content/subfolder/hello/first.txt","utf8")
const second = readFileSync("./content/subfolder/hello/second.txt",'utf8')
//console.log(first, second)
writeFileSync("./content/subfolder/hello/first.txt",`Here is the result: ${first}, ${second}`,{flag : 'a'})
