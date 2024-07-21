
//Very intereting module : FS module
//Synchronous way 

const {readFile,writeFile} = require('fs');

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/subfolder/test.txt',`result: ${first} , ${second}`,{flag:'a'},(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})
