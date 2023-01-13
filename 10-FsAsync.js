//we can destructure them 
//async not sync lol
const {readFile,writeFile} = require('fs');

readFile("./content/subfolder/hello/first.txt","utf8",(err,result)=>{
    if(err){
        console.log("Something went bad!")
        console.log(err)
        return
    }
    const first = result;
    readFile("./content/subfolder/hello/second.txt","utf8",(err,result) =>{
        if(err){
            console.log("Something went bad!")
            console.log(err)
            return
        }
        const second = result;
        writeFile("./content/subfolder/hello/result-async.txt",`Hello this is the result: ${first}, ${second}`,(err, result)=>{
            if(err)
            {
            console.log("Something went bad!")
            console.log(err)
            return
            }
            console.log(result)
        })
    })
})